pragma solidity ^0.5.2;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint _minimum) public {
       address newCampaign = address(new Campaign(_minimum, msg.sender));
       deployedCampaigns.push(newCampaign);
        }
    function getDeployedCampaigns() public view returns(address[] memory){
        return deployedCampaigns;
    }

}


contract Campaign  {
    struct Request {
        string desciption;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping (address => bool) approvalsThisRequest;
        }

    Request[] public requests;
    uint public minContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    address private _owner;

    constructor (uint _minContribution, address creator) public {
        minContribution = _minContribution;
        _owner = creator;
    }

    modifier onlyOwner() {
        require(isOwner(), "Only the owner of the contract can call this function");
        _;
    }

    /**
     * @return true if `msg.sender` is the owner of the contract.
     */
    function isOwner() public view returns (bool) {
        return msg.sender == _owner;
    }

    /**
     * @return the address of the owner.
     */
    function owner() public view returns (address) {
        return _owner;
    }

    function contribute() public payable {
        require(msg.value > minContribution, "The transaction value is less than minimum contribution");
        if(!approvers[msg.sender]){
        approvers[msg.sender] = true;
        approversCount++;
        }
    }

    function createRequest( string memory _desciption, uint _value, address payable _recipient) public onlyOwner {
        Request memory newRequest = Request({
            desciption : _desciption,
            value:_value,
            recipient : _recipient,
            complete : false,
            approvalCount : 0
           });

        requests.push(newRequest);
        }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender], "Please, donate first");
        require(!request.approvalsThisRequest[msg.sender], "You already voted for this request");

        request.approvalsThisRequest[msg.sender] = true;
        request.approvalCount++;
    }
    
    function isAlreadyApproved(uint index) public view returns (bool){
        Request storage request = requests[index];
        return request.approvalsThisRequest[msg.sender];
    }

    function finalizeRequest(uint index) public onlyOwner {
        Request storage request = requests[index];
        require(!request.complete, "Request already approved");
        require(request.approvalCount > (approversCount / 2), "Less than 50% had approved the request");
        request.complete = true;
        request.recipient.transfer(request.value);
    }

    function getSummary() public view returns(uint, uint, uint, uint, address ) {
        return(
            minContribution,
            address(this).balance,
            requests.length,
            approversCount,
            owner()
            );
    }

    function getRequestsCount() public view returns(uint) {
    return requests.length;
    }
}
