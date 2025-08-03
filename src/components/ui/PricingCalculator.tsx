"use client";

import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";

export function PricingCalculator() {
  const [users, setUsers] = useState(1);
  const calculatePrice = () => users * 5; // Example logic

  return (
    <Modal trigger={<Button>Calculate Custom Price</Button>}>
      <h3>Interactive Pricing Calculator</h3>
      <input type="number" value={users} onChange={(e) => setUsers(Number(e.target.value))} />
      <p>Estimated Price: ${calculatePrice()}/mo</p>
    </Modal>
  );
}
