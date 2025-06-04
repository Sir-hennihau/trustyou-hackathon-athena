import Layout from "@/components/Layout";
import PromptInput from "@/components/PromptInput";
import ModeSelector from "@/components/ModeSelector";

export default function MarketComparison() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Market Comparison
      </h1>
      <PromptInput />
      <ModeSelector />
    </Layout>
  );
}
