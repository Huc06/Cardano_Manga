const CurrentPlan = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Current Plan</h1>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Objective</h2>
            <p className="text-gray-700">
                Our vision is to create a decentralized, community-driven manga platform where readers can actively participate in decision-making, support manga translation projects, and contribute through a DAO system. <br />
                The platform will focus on translating manga into multiple languages, ensuring global accessibility, collaboration, and rewarding contributions while maintaining transparency.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Development Plan</h2>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-pink-500">
                <h3 className="font-semibold text-lg mb-2">Phase 1: Build Basic Support System</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Wallet integration</li>
                  <li>Token transfer system</li>
                  <li>Display projects and progress</li>
                </ul>
              </div>

              <div className="p-4 border-l-4 border-purple-500">
                <h3 className="font-semibold text-lg mb-2">Phase 2: DAO System and Project Management</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Deploy smart contracts for DAO</li>
                  <li>Voting system for sponsors</li>
                  <li>Propose and vote on manga titles to be translated</li>
                  <li>Track translation process</li>
                  <li>Distribute governance tokens based on contributions</li>
                </ul>
              </div>

              <div className="p-4 border-l-4 border-blue-500">
                <h3 className="font-semibold text-lg mb-2">Phase 3: Community Expansion</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Integrate comment and rating system</li>
                  <li>Marketplace for manga NFTs</li>
                  <li>Reward system for contributors</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Sponsor Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-pink-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-pink-700">Voting Rights</h3>
                <p className="text-gray-700">
                  Sponsors will receive governance tokens, allowing them to vote 
                  on important project decisions.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-purple-700">Project Proposals</h3>
                <p className="text-gray-700">
                  Have the right to propose and vote on manga titles to be translated.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CurrentPlan; 