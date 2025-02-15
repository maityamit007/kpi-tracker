export const Assests = [
  { "id": 1, "name": "Revenue Growth", "description": "Tracks revenue growth over time", "date": "2024-02-01" },
  { "id": 2, "name": "Customer Retention", "description": "Measures customer retention rate", "date": "2024-02-02" },
  { "id": 3, "name": "Monthly Sales Dashboard", "description": "Visualizes monthly sales trends", "date": "2024-02-03" },
  { "id": 4, "name": "Employee Performance", "description": "Tracks key employee performance metrics", "date": "2024-02-04" },
  { "id": 5, "name": "Sales Heatmap", "description": "Heatmap representation of sales data", "date": "2024-02-05" },
  { "id": 6, "name": "Customer Segmentation Chart", "description": "Breakdown of customer segments", "date": "2024-02-06" },
  { "id": 7, "name": "Quarterly Business Review", "description": "PPT report of business performance", "date": "2024-02-07" },
  { "id": 8, "name": "Marketing Campaign Analysis", "description": "Summary of marketing campaign results", "date": "2024-02-08" },
  { "id": 9, "name": "Net Profit Margin", "description": "Measures profitability after expenses", "date": "2024-02-09" },
  { "id": 10, "name": "Churn Rate", "description": "Percentage of customers lost over time", "date": "2024-02-10" },
  { "id": 11, "name": "Annual Financial Overview", "description": "Overview of yearly financial performance", "date": "2024-02-11" },
  { "id": 12, "name": "Customer Support Analytics", "description": "Dashboard for tracking customer support KPIs", "date": "2024-02-12" },
  { "id": 13, "name": "Product Sales Trends", "description": "Graphical representation of product sales", "date": "2024-02-13" },
  { "id": 14, "name": "Operational Efficiency", "description": "Chart showing operational efficiency metrics", "date": "2024-02-14" },
  { "id": 15, "name": "Investor Presentation", "description": "A presentation for stakeholders and investors", "date": "2024-02-15" },
  { "id": 16, "name": "Company Roadmap", "description": "Strategic plans and future goals", "date": "2024-02-16" },
  { "id": 17, "name": "Conversion Rate", "description": "Percentage of users taking desired actions", "date": "2024-02-17" },
  { "id": 18, "name": "Operating Cash Flow", "description": "Tracks cash generated from operations", "date": "2024-02-18" },
  { "id": 19, "name": "Retail Performance Dashboard", "description": "Dashboard for tracking retail sales KPIs", "date": "2024-02-19" },
  { "id": 20, "name": "Website Traffic Insights", "description": "Visualizes website visitor trends", "date": "2024-02-20" }
]


export const chartData = [
  {
    "id": 1,
    "name": "Pie Chart",
    "description": "Distribution of revenue generated from different products.",
    "chartData": [{
      "title": "Revenue Breakdown",
      "chartType": "pie",
      "category": "Product A",
      "value": 40
    },
    {
      "title": "Revenue Breakdown",
      "chartType": "pie",
      "category": "Product B",
      "value": 30
    },
    {
      "title": "Revenue Breakdown",
      "chartType": "pie",
      "category": "Product C",
      "value": 20
    }]
  },
  {
    "id": 3,
    "name": "Bar Diagram",
    "description": "Comparison of market share among key competitors.",
    "chartData": [
      {
        "title": "Monthly Sales",
        "chartType": "bar",
        "category": "January",
        "value": 200
      },
      {
        "title": "Monthly Sales",
        "chartType": "bar",
        "category": "February",
        "value": 250
      },
      {
        "title": "Monthly Sales",
        "chartType": "bar",
        "category": "March",
        "value": 300
      }]
  },
  {
    "id": 4,
    "name": "Column Graph",
    "description": "Breakdown of company expenses across different departments.",
    "chartData": [
      {
        "title": "Monthly Sales",
        "chartType": "bar",
        "category": "March",
        "value": 300
      },
      {
        "title": "Growth Over Time",
        "chartType": "column",
        "category": "2019",
        "value": 100
      },
      {
        "title": "Growth Over Time",
        "chartType": "column",
        "category": "2020",
        "value": 200
      },
      {
        "title": "Growth Over Time",
        "chartType": "column",
        "category": "2021",
        "value": 400
      }]
  },
  {
    "id": 5,
    "name": "Area Graph",
    "description": "Analysis of where website visitors are coming from.",
    "chartData": [
      {
        "title": "Site Traffic",
        "chartType": "area",
        "category": "Week 1",
        "value": 1000
      },
      {
        "title": "Site Traffic",
        "chartType": "area",
        "category": "Week 2",
        "value": 1500
      },
      {
        "title": "Site Traffic",
        "chartType": "area",
        "category": "Week 3",
        "value": 2000
      }
    ]
  },
  {
    "id": 2,
    "name": "Donut Graph",
    "description": "Age-wise segmentation of the customer base.",
    "chartData": [{
      "title": "Revenue Breakdown",
      "chartType": "donut",
      "category": "Product A",
      "value": 50
    },
    {
      "title": "Revenue Breakdown",
      "chartType": "donut",
      "category": "Product B",
      "value": 30
    },
    {
      "title": "Revenue Breakdown",
      "chartType": "donut",
      "category": "Product C",
      "value": 20
    }]
  },
]


export const kpiData = [
  {
    "id": 1,
    "name": "Monthly Revenue",
    "description": "Total revenue generated in the current month.",
    "value": 500000,
    "unit": "USD",
    "trend": "up"
  },
  {
    "id": 2,
    "name": "Customer Retention Rate",
    "description": "Percentage of customers retained over the past quarter.",
    "value": 85,
    "unit": "%",
    "trend": "up"
  },
  {
    "id": 3,
    "name": "New Signups",
    "description": "Number of new users who signed up this month.",
    "value": 1200,
    "unit": "users",
    "trend": "up"
  },
  {
    "id": 4,
    "name": "Satisfaction Score",
    "description": "Average satisfaction rating from recent surveys.",
    "value": 4.5,
    "unit": "out of 5",
    "trend": "neutral"
  },
  {
    "id": 5,
    "name": "Churn Rate",
    "description": "Percentage of customers lost in the past month.",
    "value": 5,
    "unit": "%",
    "trend": "down"
  }
]
