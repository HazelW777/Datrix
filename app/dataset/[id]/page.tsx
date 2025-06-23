"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Download,
  Star,
  MapPin,
  Calendar,
  BarChart3,
  Database,
  Shield,
  Clock,
  TrendingUp,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Info,
  FileText,
  Globe,
  Bot,
} from "lucide-react";
import Link from "next/link";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts";
import { getDatasetConfig } from "@/lib/sample-datasets";
import { AIAnalysisModal } from "@/components/ai-analysis-modal";

export default function DatasetDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null);
  const [showAIAnalysis, setShowAIAnalysis] = useState(false);

  // 获取数据集配置，如果没有则使用默认数据
  const datasetConfig = getDatasetConfig(id);

  // Mock data - in real app this would come from API
  const dataset = datasetConfig || {
    id: id,
    title: "Global E-commerce Consumer Behavior Dataset",
    provider: "DataVendor Corp",
    category: "Consumer Data",
    price: "$2,500/month",
    rating: 4.8,
    reviews: 127,
    records: "2.5M+",
    coverage: "150 countries",
    quality: 98,
    lastUpdated: "2024-01-15",
    features: [
      "Real-time updates",
      "API access",
      "Custom segmentation",
      "Historical data",
    ],
    description:
      "Comprehensive dataset covering global e-commerce consumer behavior patterns, purchase preferences, and market trends across 150 countries.",
    keyFeatures: [
      "Real-time transaction data",
      "Demographic segmentation",
      "Behavioral analytics",
      "Cross-platform tracking",
    ],
    valuationMetrics: {
      marketValue: "$50M+",
      annualGrowth: "+15%",
      userBase: "500K+ consumers",
      dataPoints: "50+ attributes",
    },
  };

  const dataQualityMetrics = [
    { name: "Completeness", value: 98, color: "#10B981" },
    { name: "Accuracy", value: 96, color: "#3B82F6" },
    { name: "Consistency", value: 94, color: "#8B5CF6" },
    { name: "Timeliness", value: 99, color: "#F59E0B" },
  ];

  // 使用配置中的数据字典，如果没有则使用默认数据
  const dataDictionary = datasetConfig?.dataDictionary || [
    {
      field: "user_id",
      type: "String",
      count: "2,487,563",
      unique: "2,487,563",
      missing: "0%",
      description: "Unique identifier for each consumer",
    },
    {
      field: "transaction_date",
      type: "Date",
      count: "2,487,563",
      unique: "365",
      missing: "0%",
      description: "Date of transaction (YYYY-MM-DD format)",
    },
    {
      field: "purchase_amount",
      type: "Float",
      count: "2,487,563",
      unique: "156,847",
      missing: "0.2%",
      description: "Total purchase amount in USD",
    },
    {
      field: "product_category",
      type: "String",
      count: "2,487,563",
      unique: "24",
      missing: "0.1%",
      description: "Primary product category",
    },
    {
      field: "customer_age",
      type: "Integer",
      count: "2,487,563",
      unique: "82",
      missing: "1.2%",
      description: "Customer age in years",
    },
    {
      field: "location_country",
      type: "String",
      count: "2,487,563",
      unique: "150",
      missing: "0%",
      description: "Customer country code (ISO 3166-1)",
    },
  ];

  // 使用配置中的样本数据，如果没有则使用默认数据
  const sampleDataRows = datasetConfig?.sampleData || [
    {
      user_id: "USR_001847",
      transaction_date: "2024-01-15",
      purchase_amount: 234.99,
      product_category: "Electronics",
      customer_age: 32,
      location_country: "United States",
    },
    {
      user_id: "USR_002156",
      transaction_date: "2024-01-15",
      purchase_amount: 89.5,
      product_category: "Fashion",
      customer_age: 28,
      location_country: "United Kingdom",
    },
    {
      user_id: "USR_003421",
      transaction_date: "2024-01-15",
      purchase_amount: 156.75,
      product_category: "Home & Garden",
      customer_age: 45,
      location_country: "Germany",
    },
    {
      user_id: "USR_004789",
      transaction_date: "2024-01-15",
      purchase_amount: 67.25,
      product_category: "Books",
      customer_age: 38,
      location_country: "Japan",
    },
    {
      user_id: "USR_005234",
      transaction_date: "2024-01-15",
      purchase_amount: 312.8,
      product_category: "Sports",
      customer_age: 25,
      location_country: "Australia",
    },
  ];

  const volumeData = [
    { month: "Jan", records: 180000, quality: 97 },
    { month: "Feb", records: 195000, quality: 98 },
    { month: "Mar", records: 210000, quality: 96 },
    { month: "Apr", records: 225000, quality: 99 },
    { month: "May", records: 240000, quality: 98 },
    { month: "Jun", records: 255000, quality: 97 },
    { month: "Jul", records: 270000, quality: 98 },
    { month: "Aug", records: 285000, quality: 99 },
    { month: "Sep", records: 275000, quality: 98 },
    { month: "Oct", records: 290000, quality: 97 },
    { month: "Nov", records: 305000, quality: 98 },
    { month: "Dec", records: 320000, quality: 99 },
  ];

  // 使用配置中的分类分布，如果没有则使用默认数据
  const categoryDistribution = datasetConfig?.categoryDistribution || [
    { name: "Electronics", value: 28, color: "#3B82F6" },
    { name: "Fashion", value: 22, color: "#10B981" },
    { name: "Home & Garden", value: 18, color: "#F59E0B" },
    { name: "Books", value: 12, color: "#8B5CF6" },
    { name: "Sports", value: 10, color: "#EF4444" },
    { name: "Others", value: 10, color: "#6B7280" },
  ];

  const ageDistribution = [
    { age: "18-25", count: 450000 },
    { age: "26-35", count: 780000 },
    { age: "36-45", count: 620000 },
    { age: "46-55", count: 420000 },
    { age: "56-65", count: 180000 },
    { age: "65+", count: 37563 },
  ];

  // 使用配置中的地理覆盖，如果没有则使用默认数据
  const geographicCoverage = datasetConfig?.geographicCoverage || [
    { region: "North America", countries: 3, percentage: 35 },
    { region: "Europe", countries: 45, percentage: 28 },
    { region: "Asia Pacific", countries: 52, percentage: 25 },
    { region: "Latin America", countries: 33, percentage: 8 },
    { region: "Middle East & Africa", countries: 17, percentage: 4 },
  ];

  // 生成样本数据表格的表头
  const getTableHeaders = () => {
    if (sampleDataRows.length === 0) return [];
    return Object.keys(sampleDataRows[0]);
  };

  // 格式化表格单元格值
  const formatCellValue = (value: string | number | null, key: string) => {
    if (value === null) return "N/A";

    // 特殊格式化处理
    if (key.includes("amount") && typeof value === "number") {
      return `$${value.toFixed(2)}`;
    }
    if (key.includes("score") && typeof value === "number") {
      return value.toFixed(1);
    }
    if (key.includes("timestamp") || key.includes("time")) {
      return new Date(value as string).toLocaleString();
    }

    return value.toString();
  };

  // 获取国家标志emoji
  const getCountryFlag = (countryCode: string | null) => {
    if (!countryCode) return "🌍";

    const flags: Record<string, string> = {
      US: "🇺🇸",
      DE: "🇩🇪",
      GB: "🇬🇧",
      JP: "🇯🇵",
      CA: "🇨🇦",
      AU: "🇦🇺",
      SG: "🇸🇬",
      BR: "🇧🇷",
      "United States": "🇺🇸",
      Germany: "🇩🇪",
      "United Kingdom": "🇬🇧",
      Japan: "🇯🇵",
      Canada: "🇨🇦",
      Australia: "🇦🇺",
    };
    return flags[countryCode] || "🌍";
  };

  // 获取国家全名
  const getCountryName = (countryCode: string | null) => {
    if (!countryCode) return "Unknown";

    const countries: Record<string, string> = {
      US: "United States",
      DE: "Germany",
      GB: "United Kingdom",
      JP: "Japan",
      CA: "Canada",
      AU: "Australia",
      SG: "Singapore",
      BR: "Brazil",
    };
    return countries[countryCode] || countryCode;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Top Navigation */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold heading-gradient">
                  Datrix
                </span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className="text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/marketplace"
                  className="text-slate-900 font-medium"
                >
                  Browse Data
                </Link>
                <Link
                  href="/categories"
                  className="text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Categories
                </Link>
                <Link
                  href="/providers"
                  className="text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Providers
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="font-medium">
                Sign In
              </Button>
              <Button asChild className="btn-primary font-medium">
                <Link href="/vendor-dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto section-padding py-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-slate-700 hover:text-slate-900 mr-2"
            >
              <Link href="/marketplace">
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </Button>
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/marketplace"
              className="hover:text-slate-900 transition-colors"
            >
              Marketplace
            </Link>
            <span>/</span>
            <span className="font-medium text-slate-900">{dataset.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto section-padding container-padding">
        {/* Dataset Header */}
        <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="font-medium px-3 py-1">
                  {dataset.category}
                </Badge>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-semibold">{dataset.rating}</span>
                  <span className="text-sm text-slate-600">
                    ({dataset.reviews} reviews)
                  </span>
                </div>
              </div>

              <h1 className="text-4xl font-bold heading-gradient mb-4 leading-tight">
                {dataset.title}
              </h1>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                by{" "}
                <span className="font-semibold text-slate-900">
                  {dataset.provider}
                </span>
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {dataset.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {dataset.features.map((feature) => (
                  <Badge
                    key={feature}
                    variant="outline"
                    className="font-medium"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>

              {/* AI Analysis Button */}
              <div className="mb-6">
                <Button
                  onClick={() => setShowAIAnalysis(true)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Bot className="w-5 h-5 mr-2" />
                  AI Analysis
                </Button>
              </div>
            </div>

            <div className="lg:w-80 space-y-6">
              {/* Quick Stats */}
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Dataset Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-slate-600">Records</div>
                      <div className="font-bold text-lg text-slate-900">
                        {dataset.records}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Coverage</div>
                      <div className="font-bold text-lg text-slate-900">
                        {dataset.coverage}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">
                        Quality Score
                      </div>
                      <div className="font-bold text-lg text-green-600">
                        {dataset.quality}%
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Last Updated</div>
                      <div className="font-bold text-lg text-slate-900">
                        {dataset.lastUpdated}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-1">
                      Get Access
                    </div>
                    <div className="text-lg font-semibold text-blue-600 mb-4">
                      Contact for Pricing
                    </div>
                    <div className="space-y-2">
                      <Button className="w-full btn-primary">
                        Contact Vendor
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download Sample
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Valuation Metrics */}
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Valuation Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Market Value</span>
                    <span className="font-semibold text-slate-900">
                      {dataset.valuationMetrics.marketValue}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Annual Growth</span>
                    <span className="font-semibold text-green-600">
                      {dataset.valuationMetrics.annualGrowth}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">User Base</span>
                    <span className="font-semibold text-slate-900">
                      {dataset.valuationMetrics.userBase}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Data Points</span>
                    <span className="font-semibold text-slate-900">
                      {dataset.valuationMetrics.dataPoints}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Sample Data Table */}
        <Card className="mb-8 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl">Sample Data Preview</CardTitle>
            <CardDescription className="text-base text-slate-700">
              Preview of the first 5 records from the dataset
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    {getTableHeaders().map((header) => (
                      <th
                        key={header}
                        className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900"
                      >
                        {header
                          .replace(/_/g, " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sampleDataRows.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      {getTableHeaders().map((header) => {
                        const value = row[header];
                        const isCountryField = header
                          .toLowerCase()
                          .includes("country");
                        const isAmountField = header
                          .toLowerCase()
                          .includes("amount");

                        return (
                          <td
                            key={header}
                            className={`border border-slate-200 px-4 py-3 ${
                              isAmountField
                                ? "font-semibold text-green-600"
                                : header.includes("id")
                                ? "font-mono text-sm text-slate-800"
                                : "text-slate-800"
                            }`}
                          >
                            {isCountryField && value ? (
                              <div className="flex items-center space-x-2">
                                <span>{getCountryFlag(value.toString())}</span>
                                <span className="text-slate-800">
                                  {getCountryName(value.toString())}
                                </span>
                              </div>
                            ) : (
                              formatCellValue(value, header)
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" className="font-medium">
                <Download className="w-4 h-4 mr-2" />
                Download Full Sample (1000 records)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Data Dictionary */}
        <Card className="mb-8 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl">Data Dictionary</CardTitle>
            <CardDescription className="text-base text-slate-700">
              Detailed field descriptions and data types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                      Field Name
                    </th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                      Data Type
                    </th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                      Total Count
                    </th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                      Unique Values
                    </th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                      Missing %
                    </th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataDictionary.map((field, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="border border-slate-200 px-4 py-3">
                        <code className="bg-slate-100 px-2 py-1 rounded font-mono text-sm text-slate-800">
                          {field.field}
                        </code>
                      </td>
                      <td className="border border-slate-200 px-4 py-3">
                        <Badge variant="outline" className="font-mono text-xs">
                          {field.type}
                        </Badge>
                      </td>
                      <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-900">
                        {field.count}
                      </td>
                      <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-900">
                        {field.unique}
                      </td>
                      <td className="border border-slate-200 px-4 py-3">
                        <span
                          className={`font-semibold ${
                            parseFloat(field.missing) === 0
                              ? "text-green-600"
                              : parseFloat(field.missing) < 5
                              ? "text-yellow-600"
                              : "text-red-600"
                          }`}
                        >
                          {field.missing}
                        </span>
                      </td>
                      <td className="border border-slate-200 px-4 py-3 text-slate-700">
                        {field.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Dataset Description */}
        <Card className="mb-8 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl">Dataset Description</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Overview
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  This comprehensive e-commerce consumer behavior dataset
                  provides deep insights into global shopping patterns and
                  preferences. The data is collected from verified e-commerce
                  transactions across 150 countries, covering multiple product
                  categories and demographic segments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Key Features
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {dataset.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Data Collection Methodology
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Data is collected through partnerships with major e-commerce
                  platforms and payment processors. All data is anonymized and
                  aggregated to ensure consumer privacy while maintaining
                  analytical value. The dataset is updated in real-time with a
                  24-hour delay for data validation and quality assurance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="coverage" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="coverage">Country Coverage</TabsTrigger>
            <TabsTrigger value="timescope">Time Scope</TabsTrigger>
            <TabsTrigger value="analytics">Statistical Charts</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="quality">Quality & Use Cases</TabsTrigger>
            <TabsTrigger value="compliance">Compliance & Legal</TabsTrigger>
          </TabsList>

          {/* Country Coverage Tab */}
          <TabsContent value="coverage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Global Data Coverage</span>
                </CardTitle>
                <CardDescription>
                  Geographic distribution of data across 150 countries
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* 地图样式的国家覆盖展示 */}
                <div className="bg-slate-50 rounded-lg p-8 mb-6">
                  <div className="text-center mb-6">
                    <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      150 Countries Covered
                    </h3>
                    <p className="text-slate-600">
                      Comprehensive global coverage across all major markets
                    </p>
                  </div>

                  {/* 区域分布 */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {geographicCoverage.map((region) => (
                      <div
                        key={region.region}
                        className="bg-white rounded-lg p-4 border"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-slate-900">
                            {region.region}
                          </h4>
                          <Badge variant="outline">
                            {region.countries} countries
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">
                              Data Coverage
                            </span>
                            <span className="font-medium">
                              {region.percentage}%
                            </span>
                          </div>
                          <Progress value={region.percentage} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 主要国家列表 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Top Markets by Data Volume
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                          <span className="font-medium">United States</span>
                          <span className="text-blue-600 font-semibold">
                            28%
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                          <span className="font-medium">China</span>
                          <span className="text-blue-600 font-semibold">
                            18%
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                          <span className="font-medium">United Kingdom</span>
                          <span className="text-blue-600 font-semibold">
                            12%
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                          <span className="font-medium">Germany</span>
                          <span className="text-blue-600 font-semibold">
                            8%
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                          <span className="font-medium">Japan</span>
                          <span className="text-blue-600 font-semibold">
                            7%
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                          <span className="font-medium">France</span>
                          <span className="text-blue-600 font-semibold">
                            6%
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                          <span className="font-medium">Canada</span>
                          <span className="text-blue-600 font-semibold">
                            5%
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                          <span className="font-medium">Others</span>
                          <span className="text-blue-600 font-semibold">
                            16%
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Time Scope Tab */}
          <TabsContent value="timescope" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <span>Time Coverage & Trends</span>
                </CardTitle>
                <CardDescription>
                  Records count grouped by month, quarter, and year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* 时间范围概览 */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Data Range
                      </h4>
                      <p className="text-2xl font-bold text-blue-600">
                        5 Years
                      </p>
                      <p className="text-sm text-blue-700">2019 - 2024</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">
                        Update Frequency
                      </h4>
                      <p className="text-2xl font-bold text-green-600">Daily</p>
                      <p className="text-sm text-green-700">
                        Real-time streaming
                      </p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">
                        Latest Data
                      </h4>
                      <p className="text-2xl font-bold text-purple-600">
                        Today
                      </p>
                      <p className="text-sm text-purple-700">Updated hourly</p>
                    </div>
                  </div>

                  {/* 月度趋势图 */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">
                      Monthly Record Counts (2024)
                    </h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={volumeData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip
                          formatter={(value) => [
                            value.toLocaleString(),
                            "Records",
                          ]}
                        />
                        <Line
                          type="monotone"
                          dataKey="records"
                          stroke="#3B82F6"
                          strokeWidth={3}
                          dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  {/* 季度和年度统计 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Quarterly Growth
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span>Q1 2024</span>
                            <span className="font-semibold text-green-600">
                              +12.5%
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Q2 2024</span>
                            <span className="font-semibold text-green-600">
                              +18.3%
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Q3 2024</span>
                            <span className="font-semibold text-green-600">
                              +15.7%
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Q4 2024</span>
                            <span className="font-semibold text-green-600">
                              +22.1%
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Yearly Statistics
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span>2024</span>
                            <span className="font-semibold">3.2M records</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>2023</span>
                            <span className="font-semibold">2.8M records</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>2022</span>
                            <span className="font-semibold">2.3M records</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>2021</span>
                            <span className="font-semibold">1.9M records</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Statistical Analysis Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  <span>Statistical Analysis</span>
                </CardTitle>
                <CardDescription>
                  Detailed statistical analysis for each data field
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* 列选择标签 - 移除type显示 */}
                <div className="flex space-x-3 mb-6 overflow-x-auto scrollbar-hide pb-2">
                  {dataDictionary.map((field) => (
                    <button
                      key={field.field}
                      onClick={() => setSelectedColumn(field.field)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                        selectedColumn === field.field
                          ? "bg-blue-900 text-white shadow-sm"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                      }`}
                    >
                      {field.field}
                    </button>
                  ))}
                </div>

                {/* 根据选中的列显示对应的分析图表 - 使用value range逻辑 */}
                <div className="space-y-6">
                  {selectedColumn === "purchase_amount" && (
                    <div className="space-y-6">
                      {/* Statistics Summary */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              $12.50
                            </div>
                            <div className="text-xs text-slate-600">
                              Minimum
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              $2,450.00
                            </div>
                            <div className="text-xs text-slate-600">
                              Maximum
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              $127.45
                            </div>
                            <div className="text-xs text-slate-600">Mean</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              $89.99
                            </div>
                            <div className="text-xs text-slate-600">Median</div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Distribution Chart and Box Plot */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base font-medium">
                              Distribution Histogram
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-[240px]">
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={[
                                    { range: "$0-50", count: 850000 },
                                    { range: "$51-100", count: 920000 },
                                    { range: "$101-200", count: 680000 },
                                    { range: "$201-500", count: 420000 },
                                    { range: "$501+", count: 130000 },
                                  ]}
                                >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="range" fontSize={12} />
                                  <YAxis fontSize={12} />
                                  <Tooltip />
                                  <Bar dataKey="count" fill="#3b82f6" />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base font-medium">
                              Quartile Analysis
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-xs text-slate-600">
                                  Q1 (25%)
                                </span>
                                <span className="text-sm font-medium">
                                  $45.00
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-xs text-slate-600">
                                  Q2 (Median)
                                </span>
                                <span className="text-sm font-medium">
                                  $89.99
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-xs text-slate-600">
                                  Q3 (75%)
                                </span>
                                <span className="text-sm font-medium">
                                  $165.50
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-xs text-slate-600">
                                  IQR
                                </span>
                                <span className="text-sm font-medium">
                                  $120.50
                                </span>
                              </div>
                            </div>

                            {/* Visual Box Plot Representation */}
                            <div className="mt-4">
                              <div className="text-xs text-slate-500 mb-2">
                                Box Plot Visualization
                              </div>
                              <div className="relative h-6 bg-slate-100 rounded">
                                <div
                                  className="absolute h-full bg-blue-200 rounded"
                                  style={{
                                    left: "18%",
                                    width: "49%",
                                  }}
                                />
                                <div
                                  className="absolute w-0.5 h-full bg-blue-600"
                                  style={{
                                    left: "36%",
                                  }}
                                />
                              </div>
                              <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>$12.50</span>
                                <span>$2,450.00</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Outliers */}
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base font-medium">
                            Outlier Detection
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center space-x-2">
                            <Badge variant="destructive" className="text-xs">
                              127 outliers
                            </Badge>
                            <span className="text-xs text-slate-600">
                              Values: $1,850, $2,100, $2,450 (top 3)
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {selectedColumn === "product_category" && (
                    <div className="space-y-6">
                      {/* Category Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              6
                            </div>
                            <div className="text-xs text-slate-600">
                              Categories
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              Electronics
                            </div>
                            <div className="text-xs text-slate-600">
                              Most Frequent
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              28%
                            </div>
                            <div className="text-xs text-slate-600">
                              Frequency
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              16.7%
                            </div>
                            <div className="text-xs text-slate-600">
                              Balance
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* Pie Chart */}
                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base font-medium">
                              Category Distribution
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-[240px]">
                              <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                  <Pie
                                    data={categoryDistribution}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, value }) =>
                                      `${name}: ${value}%`
                                    }
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                  >
                                    {categoryDistribution.map(
                                      (entry, index) => (
                                        <Cell
                                          key={`cell-${index}`}
                                          fill={entry.color}
                                        />
                                      )
                                    )}
                                  </Pie>
                                  <Tooltip />
                                </PieChart>
                              </ResponsiveContainer>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Category Table */}
                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base font-medium">
                              Category Breakdown
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {categoryDistribution.map((category, index) => (
                                <div
                                  key={index}
                                  className="flex justify-between items-center"
                                >
                                  <div className="flex items-center space-x-2">
                                    <div
                                      className="w-3 h-3 rounded-full"
                                      style={{
                                        backgroundColor: category.color,
                                      }}
                                    />
                                    <span className="text-sm">
                                      {category.name}
                                    </span>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-sm font-medium">
                                      {category.value}%
                                    </div>
                                    <div className="text-xs text-slate-500">
                                      {Math.round(
                                        (category.value / 100) * 2500000
                                      ).toLocaleString()}{" "}
                                      records
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  )}

                  {selectedColumn === "customer_age" && (
                    <div className="space-y-6">
                      {/* Age Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              18
                            </div>
                            <div className="text-xs text-slate-600">
                              Minimum
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              85
                            </div>
                            <div className="text-xs text-slate-600">
                              Maximum
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              34.2
                            </div>
                            <div className="text-xs text-slate-600">Mean</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              32
                            </div>
                            <div className="text-xs text-slate-600">Median</div>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base font-medium">
                            Age Demographics
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={ageDistribution}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="age" fontSize={12} />
                                <YAxis fontSize={12} />
                                <Tooltip />
                                <Bar dataKey="count" fill="#10B981" />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {selectedColumn === "location_country" && (
                    <div className="space-y-6">
                      {/* Country Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              150
                            </div>
                            <div className="text-xs text-slate-600">
                              Countries
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              United States
                            </div>
                            <div className="text-xs text-slate-600">
                              Most Frequent
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              28%
                            </div>
                            <div className="text-xs text-slate-600">
                              US Share
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              0.67%
                            </div>
                            <div className="text-xs text-slate-600">
                              Avg Balance
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base font-medium">
                            Top 10 Countries by Volume
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart
                                data={[
                                  { country: "US", count: 700000 },
                                  { country: "CN", count: 450000 },
                                  { country: "UK", count: 300000 },
                                  { country: "DE", count: 200000 },
                                  { country: "JP", count: 175000 },
                                  { country: "FR", count: 150000 },
                                  { country: "CA", count: 125000 },
                                  { country: "AU", count: 100000 },
                                  { country: "IT", count: 85000 },
                                  { country: "ES", count: 70000 },
                                ]}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="country" fontSize={12} />
                                <YAxis fontSize={12} />
                                <Tooltip />
                                <Bar dataKey="count" fill="#8B5CF6" />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {selectedColumn === "transaction_date" && (
                    <div className="space-y-6">
                      {/* Date Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-base font-bold text-blue-900">
                              2019-01-01
                            </div>
                            <div className="text-xs text-slate-600">
                              Start Date
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-base font-bold text-blue-900">
                              2024-01-15
                            </div>
                            <div className="text-xs text-slate-600">
                              End Date
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              5 years
                            </div>
                            <div className="text-xs text-slate-600">
                              Time Span
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              41,667
                            </div>
                            <div className="text-xs text-slate-600">
                              Avg/Month
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Time Series Chart */}
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base font-medium">
                            Temporal Distribution (2024)
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[280px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={volumeData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" fontSize={12} />
                                <YAxis fontSize={12} />
                                <Tooltip />
                                <Line
                                  type="monotone"
                                  dataKey="records"
                                  stroke="#3b82f6"
                                  strokeWidth={2}
                                  dot={{ r: 3 }}
                                />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {selectedColumn === "user_id" && (
                    <div className="space-y-6">
                      {/* String Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              2,487,563
                            </div>
                            <div className="text-xs text-slate-600">
                              Unique Values
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              100%
                            </div>
                            <div className="text-xs text-slate-600">
                              Uniqueness
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              2,487,563
                            </div>
                            <div className="text-xs text-slate-600">
                              Valid Values
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-blue-900">
                              0
                            </div>
                            <div className="text-xs text-slate-600">
                              Missing Values
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base font-medium">
                            Data Quality Analysis
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="text-xs text-slate-600">
                                  Completeness
                                </span>
                                <span className="text-sm font-medium">
                                  100%
                                </span>
                              </div>
                              <Progress value={100} className="h-2" />
                            </div>

                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="text-xs text-slate-600">
                                  Uniqueness
                                </span>
                                <span className="text-sm font-medium">
                                  100%
                                </span>
                              </div>
                              <Progress value={100} className="h-2" />
                            </div>

                            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                              <p className="text-sm text-green-800">
                                <CheckCircle className="w-4 h-4 inline mr-2" />
                                Perfect data quality: All user IDs are unique
                                with no missing values.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* 默认显示概览 */}
                  {!selectedColumn && (
                    <div className="text-center py-8">
                      <BarChart3 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-slate-900 mb-2">
                        Select a Field to View Analysis
                      </h3>
                      <p className="text-slate-600">
                        Click on any field name above to see detailed
                        statistical analysis with charts and metrics
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Pricing Information
                </CardTitle>
                <CardDescription className="text-center text-lg text-slate-700">
                  Learn about DataVendor Corp's prices, subscription cost, and
                  API pricing.
                </CardDescription>
              </CardHeader>
              <CardContent className="max-w-4xl mx-auto">
                <div className="text-center space-y-6">
                  <div className="bg-slate-50 rounded-lg p-8">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      <strong>
                        Global E-commerce Consumer Behavior Dataset
                      </strong>{" "}
                      is priced at <strong>Yearly subscription</strong> and{" "}
                      <strong>One-off Purchase</strong> of large data sets or
                      Global deals.
                    </p>

                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      DataVendor Corp's APIs and datasets range in cost from{" "}
                      <strong className="text-blue-600">
                        $0.01 / API Call
                      </strong>{" "}
                      to{" "}
                      <strong className="text-blue-600">$30,000/month</strong>.
                      DataVendor Corp offers free samples for individual data
                      requirements.
                    </p>

                    <p className="text-lg text-slate-700 leading-relaxed">
                      Get talking to a member of the DataVendor Corp team to
                      receive custom pricing options, information about data
                      subscription fees, and quotes for DataVendor Corp's data
                      offering tailored to your use case.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                    >
                      Receive Detailed Price
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Options Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span>Subscription Options</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Annual Subscription
                      </h4>
                      <p className="text-slate-700 text-sm mb-2">
                        Full access to the complete dataset with regular updates
                      </p>
                      <p className="font-semibold text-blue-600">
                        $15,000 - $30,000 / year
                      </p>
                      <p className="text-xs text-slate-500">
                        Pricing varies based on usage volume and features
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        API Access
                      </h4>
                      <p className="text-slate-700 text-sm mb-2">
                        Pay-per-use for real-time data access
                      </p>
                      <p className="font-semibold text-blue-600">
                        $0.01 - $0.05 / API Call
                      </p>
                      <p className="text-xs text-slate-500">
                        Volume discounts available for high-usage scenarios
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="w-5 h-5 text-purple-600" />
                    <span>One-off Purchase</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Complete Dataset
                      </h4>
                      <p className="text-slate-700 text-sm mb-2">
                        One-time purchase of the entire historical dataset
                      </p>
                      <p className="font-semibold text-blue-600">
                        $8,000 - $25,000
                      </p>
                      <p className="text-xs text-slate-500">
                        Includes data from the past 5 years
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Custom Data Extracts
                      </h4>
                      <p className="text-slate-700 text-sm mb-2">
                        Tailored datasets based on specific requirements
                      </p>
                      <p className="font-semibold text-blue-600">
                        Quote on Request
                      </p>
                      <p className="text-xs text-slate-500">
                        Pricing based on data volume and complexity
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Free Samples */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-800">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free Sample Available</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 mb-4">
                  We provide free sample data to help you evaluate the quality
                  and relevance of our dataset for your specific use case. The
                  sample includes representative data points across all major
                  categories and geographic regions.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-green-800">
                      Sample Size:
                    </span>
                    <p className="text-green-700">1,000 records</p>
                  </div>
                  <div>
                    <span className="font-medium text-green-800">
                      Data Fields:
                    </span>
                    <p className="text-green-700">All 50+ fields included</p>
                  </div>
                  <div>
                    <span className="font-medium text-green-800">Format:</span>
                    <p className="text-green-700">CSV, JSON, or Excel</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 border-green-300 text-green-700 hover:bg-green-100"
                >
                  Download Free Sample
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Get Custom Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 mb-4">
                  Our pricing is flexible and designed to accommodate various
                  business needs. Contact our team to discuss:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2 text-blue-700">
                    <li>• Volume discounts for large-scale usage</li>
                    <li>• Custom data delivery schedules</li>
                    <li>• Integration support and consulting</li>
                  </ul>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Multi-year subscription discounts</li>
                    <li>• White-label data solutions</li>
                    <li>• Enterprise SLA agreements</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Contact Sales Team
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    Schedule Demo Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quality & Use Cases Tab */}
          <TabsContent value="quality" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Volume Trends</CardTitle>
                  <CardDescription>
                    Monthly record counts and quality scores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={volumeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="records"
                        stroke="#3B82F6"
                        fill="#3B82F6"
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Coverage</CardTitle>
                  <CardDescription>Data distribution by region</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {geographicCoverage.map((region) => (
                      <div key={region.region}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">{region.region}</span>
                          <span className="text-slate-600">
                            {region.countries} countries • {region.percentage}%
                          </span>
                        </div>
                        <Progress value={region.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Data Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">
                      Available Formats
                    </h4>
                    <div className="space-y-1">
                      <Badge variant="outline">JSON</Badge>
                      <Badge variant="outline">CSV</Badge>
                      <Badge variant="outline">Parquet</Badge>
                      <Badge variant="outline">Avro</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">
                      Delivery Methods
                    </h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">REST API</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Streaming</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Batch Download</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">
                      Update Schedule
                    </h4>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-600">Daily updates</p>
                      <p className="text-sm text-slate-600">
                        Real-time streaming
                      </p>
                      <p className="text-sm text-slate-600">
                        Historical backfill
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">
                      Retention
                    </h4>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-600">5 years history</p>
                      <p className="text-sm text-slate-600">
                        Real-time: 30 days
                      </p>
                      <p className="text-sm text-slate-600">
                        Archives available
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance & Legal Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span>Compliance Standards</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">GDPR Compliant</p>
                        <p className="text-sm text-slate-600">
                          EU General Data Protection Regulation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">CCPA Compliant</p>
                        <p className="text-sm text-slate-600">
                          California Consumer Privacy Act
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">SOC 2 Type II</p>
                        <p className="text-sm text-slate-600">
                          Security and availability controls
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">ISO 27001</p>
                        <p className="text-sm text-slate-600">
                          Information security management
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span>Legal Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-1">Data Collection Method</p>
                      <p className="text-sm text-slate-600">
                        First-party data with explicit user consent
                      </p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Anonymization</p>
                      <p className="text-sm text-slate-600">
                        All PII removed using k-anonymity (k=5)
                      </p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Data Retention</p>
                      <p className="text-sm text-slate-600">
                        Maximum 7 years as per legal requirements
                      </p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Usage Rights</p>
                      <p className="text-sm text-slate-600">
                        Commercial use permitted with attribution
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Data Lineage & Provenance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Database className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-medium text-slate-900">
                        Data Sources
                      </h4>
                      <p className="text-sm text-slate-600 mt-1">
                        E-commerce platforms, mobile apps, web analytics
                      </p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-medium text-slate-900">Processing</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        ETL pipelines, data validation, quality checks
                      </p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <CheckCircle className="w-6 h-6 text-purple-600" />
                      </div>
                      <h4 className="font-medium text-slate-900">Delivery</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Secure APIs, encrypted transfers, audit logs
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800">
                          Important Legal Notice
                        </h4>
                        <p className="text-sm text-yellow-700 mt-1">
                          This dataset is provided under commercial license.
                          Users must comply with all applicable data protection
                          laws in their jurisdiction. Redistribution requires
                          written permission.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* AI Analysis Modal */}
      <AIAnalysisModal
        isOpen={showAIAnalysis}
        onClose={() => setShowAIAnalysis(false)}
        datasetTitle={dataset.title}
        sampleData={sampleDataRows}
      />
    </div>
  );
}
