"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { governorates } from "@/data/shipping";
import type { ShippingAddress } from "@/types";

interface ShippingFormProps {
  initialData?: Partial<ShippingAddress>;
  onSubmit: (data: ShippingAddress) => void;
  submitLabel?: string;
}

const emptyForm: ShippingAddress = {
  customerName: "",
  phone: "",
  altPhone: "",
  email: "",
  governorate: "Cairo",
  city: "",
  district: "",
  street: "",
  buildingNumber: "",
  floor: "",
  apartmentNumber: "",
  postalCode: "",
};

/** Egyptian shipping form - fields match EDIT SHIPPING SETTINGS in data/shipping.ts */
export function ShippingForm({
  initialData,
  onSubmit,
  submitLabel = "Continue",
}: ShippingFormProps) {
  const [form, setForm] = useState<ShippingAddress>({
    ...emptyForm,
    ...initialData,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ShippingAddress, string>>>({});

  const update = (field: keyof ShippingAddress, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ShippingAddress, string>> = {};
    if (!form.customerName.trim()) newErrors.customerName = "Required";
    if (!form.phone.trim()) newErrors.phone = "Required";
    if (!form.email.trim()) newErrors.email = "Required";
    if (!form.city.trim()) newErrors.city = "Required";
    if (!form.district.trim()) newErrors.district = "Required";
    if (!form.street.trim()) newErrors.street = "Required";
    if (!form.buildingNumber.trim()) newErrors.buildingNumber = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          label="Customer Name *"
          value={form.customerName}
          onChange={(e) => update("customerName", e.target.value)}
          error={errors.customerName}
        />
        <Input
          label="Email Address *"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />
        <Input
          label="Phone Number *"
          type="tel"
          placeholder="01XXXXXXXXX"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          error={errors.phone}
        />
        <Input
          label="Alternative Phone Number"
          type="tel"
          placeholder="01XXXXXXXXX"
          value={form.altPhone}
          onChange={(e) => update("altPhone", e.target.value)}
        />
      </div>

      <Select
        label="Governorate *"
        value={form.governorate}
        onChange={(e) => update("governorate", e.target.value)}
        options={governorates.map((g) => ({ value: g, label: g }))}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Input
          label="City *"
          value={form.city}
          onChange={(e) => update("city", e.target.value)}
          error={errors.city}
        />
        <Input
          label="District *"
          value={form.district}
          onChange={(e) => update("district", e.target.value)}
          error={errors.district}
        />
        <Input
          label="Street *"
          value={form.street}
          onChange={(e) => update("street", e.target.value)}
          error={errors.street}
        />
        <Input
          label="Building Number *"
          value={form.buildingNumber}
          onChange={(e) => update("buildingNumber", e.target.value)}
          error={errors.buildingNumber}
        />
        <Input
          label="Floor"
          value={form.floor}
          onChange={(e) => update("floor", e.target.value)}
        />
        <Input
          label="Apartment Number"
          value={form.apartmentNumber}
          onChange={(e) => update("apartmentNumber", e.target.value)}
        />
        <Input
          label="Postal Code"
          value={form.postalCode}
          onChange={(e) => update("postalCode", e.target.value)}
        />
      </div>

      <Button type="submit" size="lg" className="w-full md:w-auto">
        {submitLabel}
      </Button>
    </form>
  );
}
