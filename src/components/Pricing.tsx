import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

const tiers = [
  { name: "Basic", price: "$9/mo", features: ["Feature 1", "Feature 2"] },
  { name: "Pro", price: "$29/mo", features: ["All Basic", "Feature 3", "Feature 4"] },
  { name: "Enterprise", price: "$99/mo", features: ["All Pro", "Custom Support"] },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <Card key={tier.name} className="glass">
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <p className="text-3xl my-4">{tier.price}</p>
              <ul className="mb-6">
                {tier.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <Button variant="primary">Choose Plan</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
