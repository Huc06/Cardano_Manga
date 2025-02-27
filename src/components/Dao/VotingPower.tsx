const VotingPower = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Your Voting Power</h3>
          <p className="text-3xl font-bold">0 DAO</p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Total Circulating Tokens</h3>
          <p className="text-3xl font-bold">1,000,000 DAO</p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Participation Rate</h3>
          <p className="text-3xl font-bold">0%</p>
        </div>
      </div>
    </div>
  );
};

export default VotingPower; 