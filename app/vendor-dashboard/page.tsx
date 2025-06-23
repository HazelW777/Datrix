"use client";

import { useState } from "react";
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
import {
  BarChart3,
  DollarSign,
  Users,
  TrendingUp,
  Download,
  Eye,
  Star,
  AlertCircle,
  CheckCircle,
  Clock,
  Database,
  Plus,
  Edit,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
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

export default function VendorDashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  const revenueData = [
    { month: "Jan", revenue: 12500, datasets: 3, customers: 45 },
    { month: "Feb", revenue: 15800, datasets: 4, customers: 52 },
    { month: "Mar", revenue: 18200, datasets: 4, customers: 61 },
    { month: "Apr", revenue: 22400, datasets: 5, customers: 73 },
    { month: "May", revenue: 25100, datasets: 5, customers: 84 },
    { month: "Jun", revenue: 28900, datasets: 6, customers: 97 },
  ];

  const datasetPerformance = [
    {
      name: "E-commerce Consumer Behavior",
      revenue: 12500,
      downloads: 234,
      rating: 4.8,
      status: "active",
      growth: 15,
    },
    {
      name: "Financial Market Intelligence",
      revenue: 8900,
      downloads: 156,
      rating: 4.9,
      status: "active",
      growth: 23,
    },
    {
      name: "Healthcare Research Analytics",
      revenue: 6700,
      downloads: 89,
      rating: 4.7,
      status: "active",
      growth: -5,
    },
    {
      name: "Social Media Sentiment",
      revenue: 4200,
      downloads: 67,
      rating: 4.6,
      status: "pending",
      growth: 8,
    },
  ];

  const categoryDistribution = [
    { name: "Consumer Data", value: 35, color: "#3B82F6" },
    { name: "Financial Data", value: 28, color: "#10B981" },
    { name: "Healthcare", value: 22, color: "#F59E0B" },
    { name: "Social Media", value: 15, color: "#8B5CF6" },
  ];

  const stats = [
    {
      title: "Total Revenue",
      value: "$28,900",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
      description: "This month",
    },
    {
      title: "Total Downloads",
      value: "1,247",
      change: "+8.2%",
      changeType: "positive",
      icon: Download,
      description: "This month",
    },
    {
      title: "Active Customers",
      value: "97",
      change: "+15.3%",
      changeType: "positive",
      icon: Users,
      description: "This month",
    },
    {
      title: "Avg. Rating",
      value: "4.75",
      change: "+0.1",
      changeType: "positive",
      icon: Star,
      description: "Across all datasets",
    },
  ];

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
                  className="text-slate-700 hover:text-slate-900 transition-colors"
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
              <Badge variant="secondary" className="font-medium">
                Vendor Dashboard
              </Badge>
              <Button variant="ghost" className="font-medium">
                Profile
              </Button>
              <Button className="btn-primary font-medium">Settings</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto section-padding container-padding">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold heading-gradient mb-2">
            Vendor Dashboard
          </h1>
          <p className="text-lg text-muted">
            Monitor your data sales performance and manage your datasets
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.title} className="border-0 shadow-md">
                <CardContent className="card-padding">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-sm text-muted font-medium">
                          {stat.title}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-1">
                        {stat.value}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-sm font-semibold ${
                            stat.changeType === "positive"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {stat.change}
                        </span>
                        <span className="text-xs text-muted">
                          {stat.description}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-96">
            <TabsTrigger value="overview" className="font-medium">
              Overview
            </TabsTrigger>
            <TabsTrigger value="datasets" className="font-medium">
              My Datasets
            </TabsTrigger>
            <TabsTrigger value="analytics" className="font-medium">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="earnings" className="font-medium">
              Earnings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Revenue Trend</CardTitle>
                  <CardDescription>
                    Monthly revenue from dataset sales
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={revenueData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        className="opacity-30"
                      />
                      <XAxis
                        dataKey="month"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip
                        formatter={(value) => [`$${value}`, "Revenue"]}
                        labelStyle={{ color: "#64748b" }}
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e2e8f0",
                          borderRadius: "8px",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3B82F6"
                        fill="#3B82F6"
                        fillOpacity={0.1}
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Category Distribution */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Dataset Categories</CardTitle>
                  <CardDescription>
                    Distribution by data category
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {categoryDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value}%`, "Share"]}
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e2e8f0",
                          borderRadius: "8px",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-4 space-y-2">
                    {categoryDistribution.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: category.color }}
                          />
                          <span className="text-sm font-medium text-slate-700">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-slate-900">
                          {category.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
                <CardDescription>
                  Latest updates on your datasets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">
                        Dataset "E-commerce Consumer Behavior" approved
                      </p>
                      <p className="text-sm text-slate-600">2 hours ago</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Approved
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Download className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">
                        15 new downloads for "Financial Market Intelligence"
                      </p>
                      <p className="text-sm text-slate-600">4 hours ago</p>
                    </div>
                    <Badge variant="secondary">Downloads</Badge>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">
                        Dataset "Social Media Sentiment" under review
                      </p>
                      <p className="text-sm text-slate-600">1 day ago</p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      Pending
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Datasets Tab */}
          <TabsContent value="datasets" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  My Datasets
                </h3>
                <p className="text-muted">
                  Manage and monitor your data products
                </p>
              </div>
              <Button className="btn-primary">
                <Database className="w-4 h-4 mr-2" />
                Add New Dataset
              </Button>
            </div>

            <div className="space-y-4">
              {datasetPerformance.map((dataset, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="card-padding">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-slate-900">
                            {dataset.name}
                          </h4>
                          <Badge
                            variant={
                              dataset.status === "active"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              dataset.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {dataset.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <div>
                            <div className="text-sm text-muted">Revenue</div>
                            <div className="text-lg font-bold text-slate-900">
                              ${dataset.revenue.toLocaleString()}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted">Downloads</div>
                            <div className="text-lg font-bold text-slate-900">
                              {dataset.downloads}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted">Rating</div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-lg font-bold text-slate-900">
                                {dataset.rating}
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted">Growth</div>
                            <div
                              className={`text-lg font-bold ${
                                dataset.growth >= 0
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {dataset.growth >= 0 ? "+" : ""}
                              {dataset.growth}%
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Customer Growth */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Customer Growth</CardTitle>
                  <CardDescription>
                    Number of active customers over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        className="opacity-30"
                      />
                      <XAxis
                        dataKey="month"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip
                        formatter={(value) => [value, "Customers"]}
                        labelStyle={{ color: "#64748b" }}
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e2e8f0",
                          borderRadius: "8px",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="customers"
                        stroke="#10B981"
                        strokeWidth={3}
                        dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: "#10B981", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Dataset Performance */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Dataset Performance</CardTitle>
                  <CardDescription>Revenue by dataset</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={datasetPerformance}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        className="opacity-30"
                      />
                      <XAxis
                        dataKey="name"
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                        angle={-45}
                        textAnchor="end"
                        height={80}
                      />
                      <YAxis
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Tooltip
                        formatter={(value) => [`$${value}`, "Revenue"]}
                        labelStyle={{ color: "#64748b" }}
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e2e8f0",
                          borderRadius: "8px",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Bar
                        dataKey="revenue"
                        fill="#3B82F6"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Earnings Summary */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Earnings Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-muted">Total Earnings</span>
                    <span className="text-xl font-bold text-slate-900">
                      $156,300
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-muted">This Month</span>
                    <span className="text-lg font-semibold text-green-600">
                      $28,900
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-muted">Pending Payout</span>
                    <span className="text-lg font-semibold text-blue-600">
                      $12,450
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted">Commission Rate</span>
                    <span className="text-lg font-semibold text-slate-900">
                      15%
                    </span>
                  </div>

                  <Button className="w-full btn-primary mt-6">
                    Request Payout
                  </Button>
                </CardContent>
              </Card>

              {/* Monthly Earnings Chart */}
              <Card className="lg:col-span-2 border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Monthly Earnings</CardTitle>
                  <CardDescription>Earnings breakdown by month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={revenueData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        className="opacity-30"
                      />
                      <XAxis
                        dataKey="month"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Tooltip
                        formatter={(value) => [`$${value}`, "Revenue"]}
                        labelStyle={{ color: "#64748b" }}
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e2e8f0",
                          borderRadius: "8px",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Bar
                        dataKey="revenue"
                        fill="#10B981"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Datrix</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                The world's leading data marketplace for businesses and
                researchers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link
                    href="/marketplace"
                    className="hover:text-white transition-colors"
                  >
                    Browse Data
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="hover:text-white transition-colors"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/providers"
                    className="hover:text-white transition-colors"
                  >
                    Providers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-white transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/api"
                    className="hover:text-white transition-colors"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Datrix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
