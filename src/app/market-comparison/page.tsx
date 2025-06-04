import Layout from "@/components/Layout";
import PromptInput from "@/components/PromptInput";

export default function MarketComparison() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Market Comparison
      </h1>
      <PromptInput />
    </Layout>
  );
}
