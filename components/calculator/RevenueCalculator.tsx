"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calculator,
  IndianRupee,
  TrendingUp,
  BatteryCharging,
  X,
  Plus,
  Minus,
  PhoneCall,
  Download,
} from "lucide-react";
import { useRouter } from "next/navigation";
import RevenueChart from "./RevenueChart";
import CalculatorCard from "./CalculatorCard";
import { Charger, chargers } from "./chargerData";



interface RevenueCalculatorProps {
  open: boolean;
  onClose: () => void;
  charger?: Charger | null;
}

export default function RevenueCalculator({
  open,
  onClose,
  charger,
}: RevenueCalculatorProps) {

    const router = useRouter();
    
  /* ========================================================= */
  /* Selected Charger                                           */
  /* ========================================================= */

  const [selectedCharger, setSelectedCharger] = useState<Charger>(
    charger ?? chargers[0]
  );

  useEffect(() => {
    if (charger) {
      setSelectedCharger(charger);
    }
  }, [charger]);

  /* ========================================================= */
  /* User Inputs                                                */
  /* ========================================================= */

  const [vehiclesPerDay, setVehiclesPerDay] = useState(20);

  const [sellingTariff, setSellingTariff] = useState(18);

  const [electricityCost, setElectricityCost] = useState(8);

  const [installationCost, setInstallationCost] = useState(50000);

  /* ========================================================= */
  /* Revenue Calculations                                       */
  /* ========================================================= */

  const monthlyRevenue = useMemo(() => {
    return (
      vehiclesPerDay *
      selectedCharger.unitsPerVehicle *
      sellingTariff *
      30
    );
  }, [
    vehiclesPerDay,
    selectedCharger,
    sellingTariff,
  ]);

  const monthlyElectricityCost = useMemo(() => {
    return (
      vehiclesPerDay *
      selectedCharger.unitsPerVehicle *
      electricityCost *
      30
    );
  }, [
    vehiclesPerDay,
    selectedCharger,
    electricityCost,
  ]);

  const monthlyProfit = useMemo(() => {
    return monthlyRevenue - monthlyElectricityCost;
  }, [
    monthlyRevenue,
    monthlyElectricityCost,
  ]);

  const annualRevenue = useMemo(() => {
    return monthlyRevenue * 12;
  }, [monthlyRevenue]);

  const annualProfit = useMemo(() => {
    return monthlyProfit * 12;
  }, [monthlyProfit]);

  const breakEvenMonths = useMemo(() => {
    if (monthlyProfit <= 0) return 0;

    return Math.ceil(
      (selectedCharger.chargerPrice +
        installationCost) /
        monthlyProfit
    );
  }, [
    monthlyProfit,
    selectedCharger,
    installationCost,
  ]);

  const roiPercentage = useMemo(() => {
    const investment =
      selectedCharger.chargerPrice +
      installationCost;

    if (investment <= 0) return 0;

    return Number(
      (
        (annualProfit / investment) *
        100
      ).toFixed(1)
    );
  }, [
    annualProfit,
    selectedCharger,
    installationCost,
  ]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  /* ========================================================= */
  /* PART 2 STARTS BELOW                                        */
  /* ========================================================= */

  return (
    <AnimatePresence>
      {open && (
        <>
       <AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 lg:p-8"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.96,
          y: 40,
        }}
        transition={{
          duration: 0.35,
        }}
        className="relative flex h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-[36px] bg-white shadow-[0_40px_120px_rgba(0,0,0,.30)]"
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          className="absolute right-4 top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition hover:bg-slate-200"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}

        <div className="border-b border-slate-200 bg-linear-to-r from-lime-50 via-white to-green-50 px-8 py-7">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-lime-700">

                <Calculator className="h-4 w-4" />

                Revenue Calculator

              </div>

              <h2 className="text-3xl font-black text-slate-900">

                EV Charging ROI Calculator

              </h2>

              <p className="mt-1 max-w-2xl text-slate-600">

                Estimate revenue, operating profit, annual returns,
                and break-even period for your selected
                VOLTERRA charging solution.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-4 lg:w-86">

              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">

                <p className="text-xs uppercase tracking-wider text-slate-500">

                  Selected Charger

                </p>

                <h3 className="mt-1 text-lg font-semibold text-slate-900">

                   {selectedCharger.power} kW • {selectedCharger.category}

                </h3>

              </div>

              <div className="rounded-2xl bg-lime-500 p-4 text-white shadow-lg">

                <p className="text-xs uppercase tracking-wider text-lime-100">

                  Investment

                </p>

                <h3 className="mt-1 text-lg font-bold">

                  {formatCurrency(
                    selectedCharger.chargerPrice
                  )}

                </h3>

                {/* <p className="mt-1 text-sm text-lime-100">

                  Charger Cost

                </p> */}

              </div>

            </div>

          </div>

        </div>

        {/* Body */}

        <div className="grid flex-1 overflow-hidden lg:grid-cols-[420px_1fr]">

          {/* LEFT PANEL */}

          <div className="overflow-y-auto border-r border-slate-200 bg-slate-50 p-8">

            <div className="space-y-8">

  {/* ===================================================== */}
  {/* CHARGER SELECTION */}
  {/* ===================================================== */}

  <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200">

    <div className="mb-4 flex items-center gap-3">

      <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime-100">

        <BatteryCharging className="h-4 w-4 text-lime-600" />

      </div>

      <div>

        <h3 className="text-sm font-bold text-slate-900">

          Select Charger

        </h3>

        <p className="text-xs text-slate-500">

          Choose a VOLTERRA charging model.

        </p>

      </div>

    </div>

    <select
      value={selectedCharger.id}
      onChange={(e) => {

        const charger = chargers.find(
          (item) => item.id === Number(e.target.value)
        );

        if (charger) {

          setSelectedCharger(charger);

          setVehiclesPerDay((previous) =>
            Math.min(previous, charger.maxVehicles)
          );

        }

      }}
      className="
      w-full
      rounded-2xl
      border
      border-slate-200
      bg-white
      px-4
      py-2
      text-sm
      font-medium
      outline-none
      transition
      focus:border-lime-500
      "
    >

      {chargers.map((charger) => (

        <option
          key={charger.id}
          value={charger.id}
        >

          {charger.power} kW • {charger.category}

        </option>

      ))}

    </select>

  </div>

  {/* ===================================================== */}
  {/* VEHICLES / DAY */}
  {/* ===================================================== */}

  <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200">

    <div className="flex items-center justify-between">

      <div>

        <h3 className="text-sm font-bold text-slate-900">

          Vehicles Per Day

        </h3>

        <p className="mt-1 text-xs text-slate-500">

          Expected charging sessions each day.

        </p>

      </div>

      <div className="rounded-2xl bg-lime-100 px-3 py-1 -mt-1">

        <span className="text-base font-black text-lime-700">

          {vehiclesPerDay}

        </span>

      </div>

    </div>

    <div className="mt-4">

      <input
        type="range"
        min={1}
        max={selectedCharger.maxVehicles}
        value={vehiclesPerDay}
        onChange={(e) =>
          setVehiclesPerDay(Number(e.target.value))
        }
        className="h-2 w-full cursor-pointer accent-lime-500"
      />

      <div className="mt-2 flex justify-between text-xs text-slate-500">

        <span>1</span>

        <span>

          Max {selectedCharger.maxVehicles}

        </span>

      </div>

    </div>

    <div className="mt-4 flex items-center justify-center gap-5">

      <button
        onClick={() =>
          setVehiclesPerDay((value) =>
            Math.max(1, value - 1)
          )
        }
        className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        bg-slate-100
        transition
        hover:bg-slate-200
        "
      >

        <Minus className="h-4 w-4" />

      </button>

      <div className="min-w-22 rounded-2xl bg-slate-100 py-2 text-center">

        <span className="text-lg font-bold">

          {vehiclesPerDay}

        </span>

      </div>

      <button
        onClick={() =>
          setVehiclesPerDay((value) =>
            Math.min(
              selectedCharger.maxVehicles,
              value + 1
            )
          )
        }
        className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        bg-lime-500
        text-white
        transition
        hover:bg-lime-600
        "
      >

        <Plus className="h-4 w-4" />

      </button>

    </div>

  </div>

</div>

{/* ===================================================== */}
{/* SELLING TARIFF */}
{/* ===================================================== */}

<div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">

  <div className="mb-5 flex items-center gap-3">

    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-100">

      <IndianRupee className="h-6 w-6 text-lime-600" />

    </div>

    <div>

      <h3 className="font-bold text-slate-900">
        Selling Tariff
      </h3>

      <p className="text-sm text-slate-500">
        Revenue earned per kWh sold.
      </p>

    </div>

  </div>

  <div className="relative">

    <IndianRupee
      className="
      absolute
      left-5
      top-1/2
      h-5
      w-5
      -translate-y-1/2
      text-slate-400
      "
    />

    <input
      type="number"
      min={1}
      value={sellingTariff}
      onChange={(e) =>
        setSellingTariff(
          Math.max(
            1,
            Number(e.target.value)
          )
        )
      }
      className="
      w-full
      rounded-2xl
      border
      border-slate-200
      py-4
      pl-14
      pr-5
      text-lg
      font-semibold
      outline-none
      transition
      focus:border-lime-500
      focus:ring-4
      focus:ring-lime-100
      "
    />

  </div>

  <div className="mt-4 flex items-center justify-between">

    <span className="text-sm text-slate-500">
      Suggested
    </span>

    <span className="rounded-full bg-lime-100 px-4 py-1 text-sm font-semibold text-lime-700">
      ₹18 / kWh
    </span>

  </div>

</div>

{/* ===================================================== */}
{/* ELECTRICITY COST */}
{/* ===================================================== */}

<div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">

  <div className="mb-5 flex items-center gap-3">

    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">

      <IndianRupee className="h-6 w-6 text-blue-600" />

    </div>

    <div>

      <h3 className="font-bold text-slate-900">
        Electricity Cost
      </h3>

      <p className="text-sm text-slate-500">
        Your electricity purchase cost.
      </p>

    </div>

  </div>

  <div className="relative">

    <IndianRupee
      className="
      absolute
      left-5
      top-1/2
      h-5
      w-5
      -translate-y-1/2
      text-slate-400
      "
    />

    <input
      type="number"
      min={1}
      value={electricityCost}
      onChange={(e) =>
        setElectricityCost(
          Math.max(
            1,
            Number(e.target.value)
          )
        )
      }
      className="
      w-full
      rounded-2xl
      border
      border-slate-200
      py-4
      pl-14
      pr-5
      text-lg
      font-semibold
      outline-none
      transition
      focus:border-blue-500
      focus:ring-4
      focus:ring-blue-100
      "
    />

  </div>

  <div className="mt-4 flex items-center justify-between">

    <span className="text-sm text-slate-500">
      Suggested
    </span>

    <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
      ₹8 / kWh
    </span>

  </div>

{/* ===================================================== */}
{/* INSTALLATION COST */}
{/* ===================================================== */}

<div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">

  <div className="mb-5 flex items-center gap-3">

    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100">

      <IndianRupee className="h-6 w-6 text-amber-600" />

    </div>

    <div>

      <h3 className="font-bold text-slate-900">
        Installation Cost
      </h3>

      <p className="text-sm text-slate-500">
        Civil work, electrical installation and commissioning.
      </p>

    </div>

  </div>

  <div className="relative">

    <IndianRupee
      className="
      absolute
      left-5
      top-1/2
      h-5
      w-5
      -translate-y-1/2
      text-slate-400
      "
    />

    <input
      type="number"
      min={0}
      step={1000}
      value={installationCost}
      onChange={(e) =>
        setInstallationCost(
          Math.max(0, Number(e.target.value))
        )
      }
      className="
      w-full
      rounded-2xl
      border
      border-slate-200
      py-4
      pl-14
      pr-5
      text-lg
      font-semibold
      outline-none
      transition
      focus:border-amber-500
      focus:ring-4
      focus:ring-amber-100
      "
    />

  </div>

  <div className="mt-4 flex items-center justify-between">

    <span className="text-sm text-slate-500">
      Typical Range
    </span>

    <span className="rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700">
      ₹25k – ₹1L
    </span>

  </div>

</div>

{/* ===================================================== */}
{/* PROJECT ASSUMPTIONS */}
{/* ===================================================== */}

<div className="rounded-[28px] bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-xl">

  <div className="mb-6 flex items-center gap-3">

    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-500">

      <TrendingUp className="h-6 w-6 text-white" />

    </div>

    <div>

      <h3 className="font-bold">
        Project Assumptions
      </h3>

      <p className="text-sm text-slate-300">
        Revenue is estimated using the following values.
      </p>

    </div>

  </div>

  <div className="space-y-4">

    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">

      <span className="text-slate-300">
        Charger
      </span>

      <span className="font-semibold">
        {selectedCharger.power} kW
      </span>

    </div>

    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">

      <span className="text-slate-300">
        Category
      </span>

      <span className="font-semibold">
        {selectedCharger.category}
      </span>

    </div>

    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">

      <span className="text-slate-300">
        Units / Vehicle
      </span>

      <span className="font-semibold">
        {selectedCharger.unitsPerVehicle} kWh
      </span>

    </div>

    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">

      <span className="text-slate-300">
        Vehicles / Day
      </span>

      <span className="font-semibold">
        {vehiclesPerDay}
      </span>

    </div>

    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">

      <span className="text-slate-300">
        Operating Days
      </span>

      <span className="font-semibold">
        30 Days / Month
      </span>

    </div>

  </div>

  <div className="mt-6 rounded-2xl border border-lime-400/30 bg-lime-500/10 p-4">

    <p className="text-sm leading-6 text-lime-100">

      These estimates are indicative only. Actual revenue
      depends on charger utilization, electricity tariff,
      charging duration, pricing strategy, operating costs,
      maintenance, and local market demand.

    </p>

  </div>

</div>

</div>


          </div>

          {/* RIGHT PANEL */}

          <div className="overflow-y-auto bg-white p-8">

           <div className="space-y-8">

  {/* ============================================ */}
  {/* DASHBOARD HEADER */}
  {/* ============================================ */}

  <div className="flex flex-col gap-3">

    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-lime-100 px-4 py-2">

      <TrendingUp className="h-4 w-4 text-lime-600" />

      <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-700">
        Revenue Overview
      </span>

    </div>

    <h2 className="text-4xl font-black text-slate-900">
      Estimated Business Performance
    </h2>

    <p className="max-w-3xl text-slate-600">
      Revenue is calculated from your charger selection,
      expected daily charging sessions and pricing strategy.
    </p>

  </div>

  {/* ============================================ */}
  {/* TOP ROW */}
  {/* ============================================ */}

  <div className="grid gap-6 lg:grid-cols-3">

    <CalculatorCard
      title="Monthly Revenue"
      value={formatCurrency(monthlyRevenue)}
      subtitle="Gross monthly income"
      icon={
        <IndianRupee className="h-7 w-7" />
      }
      color="lime"
    />

    <CalculatorCard
      title="Monthly Profit"
      value={formatCurrency(monthlyProfit)}
      subtitle="Revenue after electricity cost"
      icon={
        <TrendingUp className="h-7 w-7" />
      }
      color="emerald"
    />

    <CalculatorCard
      title="Annual Revenue"
      value={formatCurrency(annualRevenue)}
      subtitle="Projected yearly income"
      icon={
        <BatteryCharging className="h-7 w-7" />
      }
      color="blue"
    />

  </div>

</div>

{/* ============================================ */}
{/* SECOND ROW */}
{/* ============================================ */}

<div className="mt-6 grid gap-6 lg:grid-cols-3">

  <CalculatorCard
    title="Annual Profit"
    value={formatCurrency(annualProfit)}
    subtitle="Estimated yearly profit"
    icon={<TrendingUp className="h-7 w-7" />}
    color="emerald"
  />

  <CalculatorCard
    title="ROI"
    value={`${roiPercentage}%`}
    subtitle="Annual Return on Investment"
    icon={<TrendingUp className="h-7 w-7" />}
    color="amber"
  />

  <CalculatorCard
    title="Break-even"
    value={
      breakEvenMonths === 0
        ? "--"
        : `${breakEvenMonths} Months`
    }
    subtitle="Estimated payback period"
    icon={<BatteryCharging className="h-7 w-7" />}
    color="blue"
  />

</div>

{/* ============================================ */}
{/* REVENUE CHART */}
{/* ============================================ */}

<motion.div
  initial={{
    opacity: 0,
    y: 40,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.25,
  }}
  className="
  mt-8
  rounded-[32px]
  border
  border-slate-200
  bg-white
  p-8
  shadow-sm
  "
>

  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

    <div>

      <div className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2">

        <TrendingUp className="h-4 w-4 text-lime-600" />

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-700">

          Revenue Analysis

        </span>

      </div>

      <h3 className="mt-4 text-3xl font-black text-slate-900">

        Revenue & Profit Projection

      </h3>

      <p className="mt-2 max-w-2xl text-slate-600">

        Compare your monthly revenue, operating cost and
        estimated monthly profit based on the selected
        VOLTERRA charger.

      </p>

    </div>

    <div className="rounded-2xl bg-lime-50 px-6 py-4">

      <p className="text-xs uppercase tracking-wider text-slate-500">

        Selected Charger

      </p>

      <h4 className="mt-1 text-xl font-bold text-slate-900">

        {selectedCharger.power} kW   

      </h4>

    </div>

  </div>

  {/* Chart */}

  <div className="mt-10">

    <RevenueChart

      monthlyRevenue={monthlyRevenue}

      monthlyCost={monthlyElectricityCost}

      monthlyProfit={monthlyProfit}

    />

  </div>

</motion.div>

{/* ============================================ */}
{/* QUICK SUMMARY */}
{/* ============================================ */}

<div className="mt-8 grid gap-5 lg:grid-cols-3">

  <div className="rounded-3xl bg-slate-900 p-6 text-white">

    <p className="text-sm text-slate-300">

      Revenue / Session

    </p>

    <h3 className="mt-3 text-3xl font-black">

      {formatCurrency(
        selectedCharger.unitsPerVehicle *
        sellingTariff
      )}

    </h3>

    <p className="mt-2 text-sm text-slate-400">

      Average earnings per charging session

    </p>

  </div>

  <div className="rounded-3xl bg-lime-500 p-6 text-white">

    <p className="text-sm text-lime-100">

      Energy Sold / Month

    </p>

    <h3 className="mt-3 text-3xl font-black">

      {(
        vehiclesPerDay *
        selectedCharger.unitsPerVehicle *
        30
      ).toLocaleString()}

      {" "}kWh

    </h3>

    <p className="mt-2 text-sm text-lime-100">

      Estimated monthly energy delivered

    </p>

  </div>

  <div className="rounded-3xl bg-blue-600 p-6 text-white">

    <p className="text-sm text-blue-100">

      Profit Margin

    </p>

    <h3 className="mt-3 text-3xl font-black">

      {monthlyRevenue > 0
        ? (
            (monthlyProfit /
              monthlyRevenue) *
            100
          ).toFixed(1)
        : 0}

      %

    </h3>

    <p className="mt-2 text-sm text-blue-100">

      Monthly operating margin

    </p>

  </div>

</div>

{/* ===================================================== */}
{/* ROI ACTION SECTION */}
{/* ===================================================== */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.35 }}
  className="
    mt-10
    overflow-hidden
    rounded-[36px]
    bg-linear-to-r
    from-slate-900
    via-slate-800
    to-slate-900
    p-8
    text-white
    shadow-[0_30px_80px_rgba(0,0,0,.25)]
  "
>

  <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

    {/* Left */}

    <div>

      <div className="inline-flex items-center gap-2 rounded-full bg-lime-500/20 px-4 py-2">

        <TrendingUp className="h-4 w-4 text-lime-300" />

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">

          ROI Summary

        </span>

      </div>

      <h2 className="mt-5 text-4xl font-black">

        Ready to build your EV charging business?

      </h2>

      <p className="mt-4 max-w-2xl text-slate-300 leading-7">

        Based on your assumptions, this charger can generate
        attractive revenue while achieving a projected
        break-even in approximately
        <span className="font-bold text-lime-300">
          {" "}
          {breakEvenMonths || "--"} months
        </span>.
      </p>

    </div>

    {/* Right */}

    <div className="grid gap-4 sm:grid-cols-2">

      <button
        className="
        inline-flex
        items-center
        justify-center
        gap-3
        rounded-2xl
        bg-lime-500
        px-8
        py-4
        font-semibold
        text-white
        transition
        hover:bg-lime-600
        "
      >

        <Download className="h-5 w-5" />

        Download ROI

      </button>

      <button
        className="
        inline-flex
        items-center
        justify-center
        gap-3
        rounded-2xl
        border
        border-white/20
        bg-white/10
        px-8
        py-4
        font-semibold
        text-white
        backdrop-blur
        transition
        hover:bg-white/20
        "
      >

        <PhoneCall className="h-5 w-5" />

        Contact Sales

      </button>

    </div>

  </div>

  {/* Bottom Summary */}

  <div className="mt-8 grid gap-5 border-t border-white/10 pt-8 lg:grid-cols-3">

    <div>

      <p className="text-sm text-slate-400">

        Investment

      </p>

      <h3 className="mt-2 text-2xl font-bold">

        {formatCurrency(
          selectedCharger.chargerPrice +
          installationCost
        )}

      </h3>

    </div>

    <div>

      <p className="text-sm text-slate-400">

        Annual Profit

      </p>

      <h3 className="mt-2 text-2xl font-bold text-lime-300">

        {formatCurrency(annualProfit)}

      </h3>

    </div>

    <div>

      <p className="text-sm text-slate-400">

        ROI

      </p>

      <h3 className="mt-2 text-2xl font-bold text-lime-300">

        {roiPercentage}%

      </h3>

    </div>

  </div>

</motion.div>

{/* ============================================ */}
{/* FOOTER */}
{/* ============================================ */}

<div className="mt-10 rounded-[32px] border border-slate-200 bg-slate-50 p-8">

  <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

    {/* Disclaimer */}

    <div className="max-w-3xl">

      <h3 className="text-xl font-bold text-slate-900">
        Important Notice
      </h3>

      <p className="mt-3 leading-7 text-slate-600">

        The above calculations are estimates based on the
        information provided. Actual revenue depends on EV
        traffic, electricity tariff, utilization, pricing
        strategy, maintenance cost, operating expenses,
        government regulations and market demand.

      </p>

    </div>

    {/* Actions */}

    <div className="flex flex-wrap gap-4">

      <button
        onClick={() => window.print()}
        className="
        rounded-2xl
        bg-slate-900
        px-8
        py-4
        font-semibold
        text-white
        transition
        hover:bg-black
        "
      >
        Download Report
      </button>

      <button
        onClick={onClose}
        className="
        rounded-2xl
        border
        border-slate-300
        bg-white
        px-8
        py-4
        font-semibold
        text-slate-700
        transition
        hover:bg-slate-100
        "
      >
        Close
      </button>

    </div>

  </div>

</div>

          </div>

        </div>

      </motion.div>

    </motion.div>
  )}
</AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}