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

export const storyBoardData = [
  {
    "id": 1,
    "name": "Monthly Revenue",
    'story': true,
    "description": "Total revenue generated in the current month.",
    "modalData": [
      { value: 2485, title: "Used" },
      { value: 'Universal', title: "Type" },
      { value: 6, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
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
      }],
    "type": "Trending",
    "hashtags": ["#finance", "#growth", "#monthlyreport"]
  },
  {
    "id": 2,
    "name": "Customer Retention Rate",
    'story': true,
    "description": "Percentage of customers retained over the past quarter.",
    "modalData": [
      { value: 5478, title: "Used" },
      { value: 'Local', title: "Type" },
      { value: 7, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
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
    }],
    "type": "Featured",
    "hashtags": ["#customerloyalty", "#retention", "#businessgrowth"]
  }]

export const kpiData = [
  {
    "id": 1,
    "name": "Monthly Revenue",
    "description": "Total revenue generated in the current month.",
    "modalData": [
      { value: 2485, title: "Used" },
      { value: 'Universal', title: "Type" },
      { value: 6, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "type": "Trending",
    "hashtags": ["#finance", "#growth", "#monthlyreport"]
  },
  {
    "id": 2,
    "name": "Customer Retention Rate",
    "description": "Percentage of customers retained over the past quarter.",
    "modalData": [
      { value: 5478, title: "Used" },
      { value: 'Local', title: "Type" },
      { value: 7, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "type": "Featured",
    "hashtags": ["#customerloyalty", "#retention", "#businessgrowth"]
  },
  {
    "id": 3,
    "name": "New Signups",
    "description": "Number of new users who signed up this month.",
    "modalData": [
      { value: 1356, title: "Used" },
      { value: 'Local', title: "Type" },
      { value: 2, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "hashtags": ["#signup", "#usergrowth", "#newusers"]
  },
  {
    "id": 4,
    "name": "Satisfaction Score",
    "description": "Average satisfaction rating from recent surveys.",
    "modalData": [
      { value: 4485, title: "Used" },
      { value: 'Universal', title: "Type" },
      { value: 5, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "type": "Trending",
    "hashtags": ["#customersatisfaction", "#feedback", "#quality"]
  },
  {
    "id": 5,
    "name": "Churn Rate",
    "description": "Percentage of customers lost in the past month.",
    "modalData": [
      { value: 9924, title: "Used" },
      { value: 'Local', title: "Type" },
      { value: 2, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "hashtags": ["#customerretention", "#churnrate", "#customersuccess"]
  },
  {
    "id": 6,
    "name": "Customer Satisfaction",
    "description": "Overall customer satisfaction based on recent feedback.",
    "modalData": [
      { value: 8921, title: "Used" },
      { value: 'Local', title: "Type" },
      { value: 4, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "type": "Featured",
    "hashtags": ["#customerfeedback", "#satisfaction", "#reviews"]
  },
  {
    "id": 7,
    "name": "Website Traffic",
    "description": "Number of visitors to the website this month.",
    "modalData": [
      { value: 7854, title: "Used" },
      { value: 'Universal', title: "Type" },
      { value: 8, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "type": "Trending",
    "hashtags": ["#webtraffic", "#sitevisits", "#digitalmarketing"]
  },
  {
    "id": 8,
    "name": "Product Returns",
    "description": "Percentage of products returned by customers.",
    "modalData": [
      { value: 6532, title: "Used" },
      { value: 'Universal', title: "Type" },
      { value: 3, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "hashtags": ["#returns", "#productquality", "#customerservice"]
  },
  {
    "id": 9,
    "name": "Employee Satisfaction",
    "description": "Employee satisfaction score based on surveys.",
    "modalData": [
      { value: 9452, title: "Used" },
      { value: 'Local', title: "Type" },
      { value: 1, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "hashtags": ["#employeesatisfaction", "#workplace", "#employeeengagement"]
  },
  {
    "id": 10,
    "name": "Productivity Rate",
    "description": "Rate of productivity across teams.",
    "modalData": [
      { value: 2345, title: "Used" },
      { value: 'Universal', title: "Type" },
      { value: 6, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "hashtags": ["#productivity", "#efficiency", "#workforce"]
  },
  {
    "id": 11,
    "name": "Market Share",
    "description": "Percentage of market share held by the company.",
    "modalData": [
      { value: 4312, title: "Used" },
      { value: 'Local', title: "Type" },
      { value: 8, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "hashtags": ["#marketshare", "#businessgrowth", "#competitiveness"]
  },
  {
    "id": 12,
    "name": "Average Order Value",
    "description": "Average value of orders placed this month.",
    "modalData": [
      { value: 6789, title: "Used" },
      { value: 'Universal', title: "Type" },
      { value: 9, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "type": "Featured",
    "hashtags": ["#sales", "#averageorder", "#ecommerce"]
  },
  {
    "id": 13,
    "name": "Lead Conversion Rate",
    "description": "Percentage of leads converted into customers.",
    "modalData": [
      { value: 5234, title: "Used" },
      { value: 'Local', title: "Type" },
      { value: 10, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "hashtags": ["#conversionrate", "#leads", "#sales"]
  },
  {
    "id": 14,
    "name": "Average Response Time",
    "description": "Average time taken to respond to customer queries.",
    "modalData": [
      { value: 2345, title: "Used" },
      { value: 'Universal', title: "Type" },
      { value: 2, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "hashtags": ["#customersupport", "#responsetime", "#service"]
  },
  {
    "id": 15,
    "name": "Product Quality Score",
    "description": "Overall product quality based on customer feedback.",
    "modalData": [
      { value: 6789, title: "Used" },
      { value: 'Universal', title: "Type" },
      { value: 4, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "hashtags": ["#productquality", "#customerfeedback", "#qualitycontrol"]
  },
  {
    "id": 16,
    "name": "Order Fulfillment Rate",
    "description": "Percentage of orders successfully fulfilled.",
    "modalData": [
      { value: 1023, title: "Used" },
      { value: 'Local', title: "Type" },
      { value: 7, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "hashtags": ["#orderfulfillment", "#shipping", "#ecommerce"]
  },
  {
    "id": 17,
    "name": "Inventory Turnover",
    "description": "Rate at which inventory is sold and replaced.",
    "modalData": [
      { value: 5647, title: "Used" },
      { value: 'Universal', title: "Type" },
      { value: 3, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "hashtags": ["#inventory", "#stockmanagement", "#sales"]
  },
  {
    "id": 18,
    "name": "Employee Turnover Rate",
    "description": "Percentage of employees who left the company.",
    "modalData": [
      { value: 8934, title: "Used" },
      { value: 'Local', title: "Type" },
      { value: 1, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "hashtags": ["#employeeturnover", "#workforce", "#hr"]
  },
  {
    "id": 19,
    "name": "Sales Growth",
    "description": "Percentage increase in sales compared to last month.",
    "modalData": [
      { value: 2435, title: "Used" },
      { value: 'Universal', title: "Type" },
      { value: 6, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "hashtags": ["#salesgrowth", "#business", "#revenue"]
  },
  {
    "id": 20,
    "name": "Social Media Engagement",
    "description": "Engagement rate on social media platforms.",
    "modalData": [
      { value: 5678, title: "Used" },
      { value: 'Universal', title: "Type" },
      { value: 3, title: "Page No." },
      { value: '07/23/2024', title: "Last Updated" },
    ],
    "type": "Trending",
    "hashtags": ["#socialmedia", "#engagement", "#marketing"]
  }
]


