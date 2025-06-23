function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-calmGreen">Welcome to Moneyy Buddy</h1>
      <p className="mt-4 text-lg max-w-xl text-center">
        Your kind, judgment-free space for understanding money. Let Buddy guide
        you through budgeting, saving, investing, and asking great questions to Onpoint.
      </p>
      <a
        href="/chat"
        className="mt-6 px-6 py-3 bg-mutedBlue text-white rounded-md hover:bg-calmGreen"
      >
        Start Chatting with Buddy now!
      </a>
    </div>
  );
}

export default Home;