import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";
import CategoryBreakdown from "@/components/CategoryBreakdown";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-12 sm:px-8 sm:py-16 bg-background text-foreground">
      <main className="max-w-3xl mx-auto flex flex-col gap-12">
        <header className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Personal Finance Visualizer
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Track your transactions, visualize your spending, and stay in control of your money.
          </p>
        </header>

        <section>
          <h2 className="text-xl font-semibold mb-4">+ Add New Transaction</h2>
          <TransactionForm />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <TransactionList />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Spending Breakdown</h2>
          <CategoryBreakdown />
        </section>
      </main>
    </div>
  );
}
