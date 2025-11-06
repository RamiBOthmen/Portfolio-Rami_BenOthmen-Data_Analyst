export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string;
  role: string;
  results: string;
  dataSource?: string;
  images?: string[];
  tableauPath?: string;
  externalLink?: string;
  hasDetailedView?: boolean;
}

export interface DetailedProject {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  objectives: string[];
  dataSources: string;
  dataModel: string;
  tools: string[];
  kpis: string[];
  insights: Array<{
    title: string;
    finding: string;
    recommendation: string;
  }>;
  challenges: string[];
  lessons: string[];
  images: string[];
  tableauPath?: string;
  externalLink?: string;
}

export const projects: Project[] = [
  {
    id: "ufc-event-analysis",
    title: "UFC Event Analysis",
    description: "Maximize the Octagon: Where & When to Fight Next ?",
    tools: "Python, Plotly, HTML/CSS",
    role: "Data analysis and visualization",
    results: "Identified optimal markets and seasonal timing to maximize PPV and live gate.",
    images: ["ufc/UFC.jpg"],
    hasDetailedView: true
  },
  {
    id: "esports-championship-analytics",
    title: "Maghreb Esports Championship Analytics Platform",
    description: "Comprehensive SQL-based analytics solution for a regional esports championship, analyzing tournament performance, team dynamics, and player statistics across multiple games. Built advanced queries to track team rankings, identify player transfers, analyze match patterns, and provide strategic insights for tournament organizers and team managers.",
    tools: "SQL Server, T-SQL, Database Design, Performance Analytics",
    role: "Database analysis, SQL development, performance metrics design",
    results: "Developed 30+ analytical queries covering team rankings, player transfer patterns, match analysis, and tournament insights. Identified key performance indicators and competitive dynamics across the Maghreb esports ecosystem.",
    images: ["e-sports_championship/ESportsChampionship.webp"],
    externalLink: "https://github.com/RBenOthmen/ESports-Championship.git",
    hasDetailedView: true
  },

  {
    id: "data-professional-survey-analysis",
    title: "Data Professional Survey Analysis Dashboard",
    description: "Interactive BI dashboard in Power BI transforming raw global survey responses into actionable insights on roles, compensation, skills, and satisfaction.",
    tools: "Microsoft Power BI, Power Query (M), DAX",
    role: "Data modeling, ETL with Power Query, DAX measures, dashboard design",
    results: "Revealed salary leadership for Data Scientists, highlighted work/life balance vs salary satisfaction gap, and quantified Python as top language preference across 630 respondents.",
    images: [
      "Survey_Analysis/Survey_Dashboard.png",
      "Survey_Analysis/survey.jpg"
    ],
    hasDetailedView: true
  },

  {
    id: "netflix-dashboard",
    title: "Netflix Content Analysis Dashboard",
    description: "Comprehensive analysis of Netflix's content library exploring content distribution, genre trends, geographic origins, and audience demographics. Built interactive visualizations to understand content strategy, market positioning, and viewer preferences across different regions and time periods.",
    tools: "Tableau Public, SQL, Google Sheets",
    role: "Data analysis, visualization, and dashboard design",
    results: "Uncovered key insights about content distribution, identified top-performing genres and countries, and provided strategic recommendations for content acquisition and regional expansion.",
    images: ["netflix_vizzes/netflix_dashboard.png"],
    externalLink: "https://public.tableau.com/views/Netflix_17552082878090/Dashboard1_1?:showVizHome=no",
    hasDetailedView: true
  },

  {
    id: "global-ecommerce-sales-dashboard",
    title: "Global E-Commerce Sales Performance Dashboard",
    description: "Comprehensive data analysis and visualization project for a multinational B2C e-commerce company. Built an interactive Tableau dashboard to transform raw sales transaction data into actionable business intelligence, enabling stakeholders to track KPIs, understand customer behavior, and identify growth opportunities.",
    tools: "Tableau Public, Tableau Desktop, SQL",
    role: "Data analysis, visualization, and dashboard design",
    results: "Centralized sales data into a single source of truth, identified that returning customers generate 60% of revenue despite being only 25% of the customer base, and provided strategic insights for business growth.",
    images: ["E-Commerce Sales Performance/6.png", "E-Commerce Sales Performance/10.png"],
    externalLink: "https://public.tableau.com/views/ecommerce_star_schema/SalesOverview?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    hasDetailedView: true
  },

  {
    id: "joby-hunter",
    title: "JobyHunter — AI-driven Talent Acquisition System",
    description: "Comprehensive talent acquisition platform with AI integration and advanced analytics dashboard. Built an end-to-end recruitment solution featuring web scraping, candidate screening, and HR analytics to optimize hiring processes and provide actionable insights for recruitment strategy.",
    tools: "Python, ASP.NET Core, Angular, MongoDB, SQL Server, Power BI, Selenium",
    role: "Led development, integrated web scraping, optimized architecture",
    results: "Reduced response times by 20%, improved hiring efficiency by 30%, and provided data-driven insights for recruitment optimization.",
    images: ["jobyhunter/hr.jpg"],
    hasDetailedView: true
  },
  
  {
    id: "sales-insights",
    title: "Sales Insights Engine",
    description: "Comprehensive sales performance dashboard built with SQL Server Data Warehouse and Power BI using DAX measures. Analyzes sales performance across time, product lines, and order status to identify trends, top-performing products, and potential issues in the sales pipeline.",
    tools: "SQL Server, Power BI, DAX",
    dataSource: "Synthetic dataset",
    role: "Data warehouse design, DAX development, and dashboard creation",
    results: "Identified critical sales pipeline issues with 55% of sales value in problematic statuses, provided actionable insights for inventory planning and marketing campaigns.",
    images: ["vehicle/vehicle.jpg"],
    hasDetailedView: true
  },

  {
    id: "employee-performance-analytics",
    title: "Employee Performance & Analytics",
    description: "End-to-end HR analytics solution analyzing performance, absenteeism, turnover, and training data to provide actionable insights for improving employee retention and optimizing training programs.",
    tools: "Tableau Desktop, Google Sheets, Tableau Public",
    role: "Data analysis, visualization, and dashboard design",
    results: "Identified key workforce trends and provided strategic recommendations for employee retention and training optimization.",
    images: ["employee_analysis_vizzes/employee.jpg", "employee_analysis_vizzes/Absence Analysis dashboard.png", "employee_analysis_vizzes/turnover_dashboard.png", "employee_analysis_vizzes/performance_dashboard.png"],
    externalLink: "https://public.tableau.com/views/EmployeeAnalysis_17558915171540/Story1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    hasDetailedView: true
  },

  {
    id: "ecommerce-sales-customer-dashboard",
    title: "E-Commerce Sales & Customer Performance Dashboard",
    description: "Comprehensive analysis of multi-national e-commerce data exploring sales performance, customer behavior, and product trends. Built interactive Tableau dashboards to derive actionable insights for optimizing marketing strategies, inventory management, and overall profitability.",
    tools: "Tableau Public, SQL, Google Sheets",
    role: "Data analysis, visualization, and dashboard design",
    results: "Identified key revenue drivers, customer segments, and geographic performance patterns, providing data-driven recommendations for business optimization.",
    images: ["E-Commerce Sales Performance/ecommerce.jpg"],
    externalLink: "https://public.tableau.com/views/Education_17555429105260/Dashboard1?:showVizHome=no",
    hasDetailedView: true
  },

  {
    id: "vivo-mobile-phones-analysis",
    title: "Vivo Mobile Data Analysis — Turning Raw Specs into Market Insights",
    description: "Analyzed Vivo mobile phone specifications to uncover strategic product positioning and consumer preferences. Applied Excel data cleaning techniques and PivotTable analysis to transform raw specification data into actionable business intelligence. Identified key market trends and popular configurations that drive Vivo's strategic focus on the budget and mid-range mobile phone market.",
    tools: "Microsoft Excel (PivotTables, PivotCharts, Text to Columns, Formulas)",
    role: "Data analysis, data cleaning, and dashboard design",
    results: "8GB RAM + 128GB ROM was the most demanded configuration. Mid-range processors (Mediatek Helio P35, Qualcomm Snapdragon 680) dominate Vivo's lineup, strategically paired with 5000mAh batteries for the value-driven market segment.",
    images: ["vivo_phones/vivo.jpg"],
    hasDetailedView: true
  },
];

export const detailedProjects: Record<string, DetailedProject> = {
  "employee-performance-analytics": {
    id: "employee-performance-analytics",
    title: "Employee Performance & Analytics",
    subtitle: "Transforming Employee Data into Strategic Insights",
    overview: "This project involved building an end-to-end HR analytics solution to help leadership understand key workforce trends. By analyzing performance, absenteeism, turnover, and training data, the dashboard provides actionable insights to improve employee retention, optimize training programs, and identify high performers.",
    objectives: [
      "Reduce Employee Turnover: Identify departments and job roles with the highest churn rate and analyze the factors leading to it.",
      "Optimize Training Programs: Evaluate the impact of different training types on employee performance and retention.",
      "Monitor Performance & Productivity: Track KPI scores and absenteeism across departments to pinpoint areas of excellence and concern.",
      "Improve Hiring Strategy: Analyze the demographics (age, gender) of employees who stay and perform well."
    ],
    dataSources: "Simulated HR Data from an Excel File",
    dataModel: "Star Schema consisting of: Fact Table: FactPerformance (Contains metrics: kpi_score, absencedays, turnoverflag) and Dimension Tables: DimEmployee (Employee demographics), DimDepartments (Department names), DimJobs (Job titles and salary bands), DimTraining (Training programs), DimDate (Time intelligence)",
    tools: [
      "Tableau Desktop",
      "Tableau Public",
      "Google Sheets",
      "Excel"
    ],
    kpis: [
      "Overall Turnover Rate: COUNT(turnoverflag) / COUNT(employeeid)",
      "Turnover Rate by Department & Job Role",
      "Average KPI Score (Company-wide and segmented by Department/Job Role)",
      "Average Absence Days",
      "Training Effectiveness: Correlation between training completion and changes in KPI/absenteeism",
      "Employee Demographics: Distribution of age and gender across departments"
    ],
    insights: [
      {
        title: "High Turnover in 'Service Client' (Customer Service)",
        finding: "The Customer Service department has a 20% higher turnover rate than the company average.",
        recommendation: "Investigate root causes: conduct exit interviews, review workload, and consider career pathing or salary adjustments for this role."
      },
      {
        title: "Technical Training Boosts Performance",
        finding: "Employees who completed 'Power BI' (technical) training saw an average 15% increase in their KPI score in the following quarter.",
        recommendation: "Increase investment and access to technical training programs. Promote them as a tool for career development."
      },
      {
        title: "Correlation Between Absenteeism and Turnover",
        finding: "Employees who left the company had, on average, 2x the absenteeism in their final quarter compared to active employees.",
        recommendation: "Use absenteeism as a leading indicator for managers to identify at-risk employees and conduct proactive check-ins."
      }
    ],
    challenges: [
      "Ambiguous employee names required creating a unique 'Display Name' by concatenating First Name, Last Name, and Employee ID to ensure accurate analysis.",
      "Deciding on the correct aggregation for the FactPerformance table (e.g., using the record where turnoverflag = 1 for leaver analysis)."
    ],
    lessons: [
      "The importance of data understanding and cleaning before visualization.",
      "A well-designed data model (Star Schema) is crucial for building effective and performant dashboards."
    ],
    images: [
      "employee_analysis_vizzes/Absence Analysis dashboard.png",
      "employee_analysis_vizzes/1.png",
      "employee_analysis_vizzes/2.png",
      "employee_analysis_vizzes/turnover_dashboard.png",
      "employee_analysis_vizzes/3.png",
      "employee_analysis_vizzes/4.png",
      "employee_analysis_vizzes/performance_dashboard.png",
      "employee_analysis_vizzes/5.png",
      "employee_analysis_vizzes/6.png"
    ],
    externalLink: "https://public.tableau.com/views/EmployeeAnalysis_17558915171540/Story1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  "global-ecommerce-sales-dashboard": {
    id: "global-ecommerce-sales-dashboard",
    title: "Global E-Commerce Sales Performance Dashboard",
    subtitle: "Transforming Sales Data into Strategic Business Intelligence",
    overview: "A comprehensive data analysis and visualization project for a multinational B2C e-commerce company. Built an interactive Tableau dashboard to transform raw sales transaction data into actionable business intelligence, enabling stakeholders to track KPIs, understand customer behavior, and identify growth opportunities across global markets.",
    objectives: [
      "Centralize Sales Data: Create a single source of truth for monitoring business health and performance across all markets.",
      "Track Sales Trends: Analyze revenue patterns, seasonal variations, and growth trajectories over time.",
      "Customer Segmentation: Identify most valuable customers and understand their demographics and purchasing behavior.",
      "Product Performance: Determine which products, categories, and sales channels are performing best.",
      "Promotion Effectiveness: Evaluate the impact of marketing campaigns and promotional activities on sales."
    ],
    dataSources: "Synthetic sales data simulating a real-world e-commerce operation (~3M+ transaction records)",
    dataModel: "Star Schema with Fact Table: fact_sales (LineTotal, Quantity, UnitPrice, OrderDate, CustomerId, ProductId, ChannelId, WarehouseId, PromotionId) and Dimension Tables: dim_customer (demographics), dim_product (categories, brands), dim_date (time hierarchies), dim_channel (sales channels), dim_warehouse (locations), dim_promotion (campaign details)",
    tools: [
      "Tableau Public",
      "Tableau Desktop",
      "SQL",
      "Excel"
    ],
    kpis: [
      "Sales Performance: Total Revenue, Quantity Sold, Number of Orders, Average Order Value (AOV)",
      "Growth Metrics: Month-over-Month (MoM) and Year-over-Year (YoY) Revenue Growth",
      "Customer Analysis: New vs. Returning Customer Revenue, Customer Lifetime Value (LTV) Estimation",
      "Product Analysis: Revenue and Units Sold by Product Category and Brand, Top & Bottom Performing Products",
      "Operational Efficiency: Average Shipping Time, Revenue by Sales Channel (Web, Mobile, etc.)",
      "Demographic Analysis: Revenue by Age Group, Gender, Country"
    ],
    insights: [
      {
        title: "Returning Customers Drive Revenue",
        finding: "Returning customers, who make up only 25% of the customer base, generate over 60% of total revenue.",
        recommendation: "Launch targeted retention campaigns and loyalty programs to increase customer lifetime value and reduce churn."
      },
      {
        title: "Premium Segment Growth Opportunity",
        finding: "Sales from the 'Premium' customer segment have grown 35% YoY, outperforming all other segments.",
        recommendation: "Develop strategies to convert 'Regular' segment customers to 'Premium' through personalized marketing and enhanced service offerings."
      },
      {
        title: "Electronics Category Performance",
        finding: "Products in the 'Electronics' category have the highest average order value but also the longest average shipping time.",
        recommendation: "Optimize supply chain and logistics for electronics to reduce shipping times while maintaining the high AOV advantage."
      }
    ],
    challenges: [
      "Handling large datasets (~3M+ rows) required optimization of Tableau performance through efficient data modeling and calculated field design.",
      "Creating accurate customer segmentation using LOD expressions to classify customers as 'New' vs 'Returning' based on their entire order history.",
      "Implementing complex time-based calculations for YoY and MoM growth metrics while maintaining dashboard responsiveness."
    ],
    lessons: [
      "Advanced Tableau techniques like LOD expressions and calculated fields are essential for complex business logic and accurate KPI calculations.",
      "A well-designed star schema data model significantly improves dashboard performance and enables flexible analysis across multiple dimensions.",
      "Interactive dashboard elements (parameters, filters) greatly enhance user experience and enable self-service analytics for stakeholders."
         ],
     images: [
       "E-Commerce Sales Performance/1.png",
       "E-Commerce Sales Performance/2.png",
       "E-Commerce Sales Performance/3.png",
       "E-Commerce Sales Performance/4.png",
       "E-Commerce Sales Performance/5.png",
       "E-Commerce Sales Performance/6.png",
       "E-Commerce Sales Performance/7.png",
       "E-Commerce Sales Performance/8.png",
       "E-Commerce Sales Performance/9.png",
       "E-Commerce Sales Performance/10.png"
     ],
     externalLink: "https://public.tableau.com/views/ecommerce_star_schema/SalesOverview?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
   },
   "ecommerce-sales-customer-dashboard": {
     id: "ecommerce-sales-customer-dashboard",
     title: "E-Commerce Sales & Customer Performance Dashboard",
     subtitle: "Driving Business Growth Through Data-Driven Insights",
     overview: "This end-to-end data analysis project explores sales performance, customer behavior, and product trends for a multi-country e-commerce business. The goal was to derive actionable insights to optimize marketing strategies, inventory management, and overall profitability through comprehensive data analysis and interactive visualization.",
     objectives: [
       "Sales Performance Analysis: Analyze total revenue, order patterns, and average order value across different time periods and sales channels.",
       "Customer Segmentation: Identify and analyze high-value customers, regular customers, new customers, and at-risk customers to optimize marketing strategies.",
       "Product Performance: Evaluate product category performance and identify fast-moving vs slow-moving products for inventory optimization.",
       "Geographic Analysis: Understand revenue distribution by country to identify key markets and expansion opportunities.",
       "Channel Optimization: Analyze sales channel performance to allocate marketing resources effectively."
     ],
     dataSources: "Multi-national e-commerce dataset containing sales, customer, and product records",
     dataModel: "Relational database structure with multiple tables including customers, orders, products, and sales channels. Utilized SQL joins and aggregations to create comprehensive analysis views.",
     tools: [
       "Tableau Public",
       "SQL",
       "Google Sheets",
       "Data Visualization"
     ],
     kpis: [
       "Sales Performance: Total revenue, number of orders, average order value (AOV), monthly revenue trends",
       "Customer Analysis: Top customers by revenue, customer segmentation (High Value, Regular, New, At-Risk), demographic analysis",
       "Product Analysis: Revenue by product category, fast-moving vs slow-moving products, price-quantity relationships",
       "Geographic Performance: Revenue distribution by country, market penetration analysis",
       "Channel Performance: Revenue contribution by sales channel (Web, Marketplace, Mobile App)"
     ],
     insights: [
       {
         title: "Web Sales Dominate Revenue",
         finding: "Web sales are the largest revenue channel (32.4M €), nearly double the next largest channel.",
         recommendation: "Increase investment in web platform optimization and digital marketing to capitalize on this high-performing channel."
       },
       {
         title: "High-Value Customer Segment Opportunity",
         finding: "High Value customers, while fewest in number (10,106 orders), generated the second-highest revenue (6M €).",
         recommendation: "Develop targeted retention and loyalty programs for high-value customers to maximize lifetime value."
       },
       {
         title: "Geographic Market Leadership",
         finding: "Sweden is the top-performing country by revenue (6.93M €), followed closely by Poland and Norway.",
         recommendation: "Use successful strategies from Sweden as a template for expansion into other Nordic markets."
       },
       {
         title: "Product Performance Optimization",
         finding: "The product 'CleanFox Coffee Makers Model SSS' is the fastest-moving item, with 627 units sold.",
         recommendation: "Increase inventory levels for fast-moving products and analyze similar products for expansion opportunities."
       }
     ],
     challenges: [
       "Handling multi-national data with different currencies, languages, and regional variations required careful data cleaning and standardization.",
       "Creating meaningful customer segments required analyzing purchase patterns, frequency, and monetary value across different time periods.",
       "Balancing dashboard complexity with user-friendliness while providing comprehensive insights across multiple business dimensions."
     ],
     lessons: [
       "Data cleaning and preprocessing are crucial for accurate analysis, especially when working with multi-national datasets.",
       "Customer segmentation based on RFM (Recency, Frequency, Monetary) analysis provides valuable insights for targeted marketing strategies.",
       "Interactive dashboards with drill-down capabilities enable stakeholders to explore data at their own pace and discover new insights."
     ],
           images: ["education_dashboard.png"],
      externalLink: "https://public.tableau.com/views/Education_17555429105260/Dashboard1?:showVizHome=no"
    },
    "netflix-dashboard": {
      id: "netflix-dashboard",
      title: "Netflix Content Analysis Dashboard",
      subtitle: "Unlocking Insights from Global Streaming Content Data",
      overview: "This comprehensive analysis project explores Netflix's content library to understand content distribution patterns, genre preferences, geographic origins, and audience demographics. The project analyzes over 5,800 titles from 2001-2020 to provide strategic insights for content acquisition, regional expansion, and audience targeting.",
      objectives: [
        "Content Distribution Analysis: Understand the balance between movies and TV shows in Netflix's library and their temporal distribution.",
        "Genre Performance Assessment: Identify top-performing genres and genre combinations to inform content acquisition strategies.",
        "Geographic Content Mapping: Analyze content origins by country to understand global content diversity and regional preferences.",
        "Audience Demographics: Examine content ratings distribution to understand target audience segments and content maturity levels.",
        "Temporal Trends: Track content addition patterns over time to identify growth phases and strategic shifts in content strategy."
      ],
      dataSources: "Netflix content dataset containing 5,894 titles with metadata including type, title, director, cast, country, date_added, release_year, rating, duration, and genre information",
      dataModel: "Structured dataset with content metadata including categorical variables (type, genre, rating, country) and temporal variables (release_year, date_added). Utilized data aggregation and filtering for multi-dimensional analysis.",
      tools: [
        "Tableau Public",
        "SQL",
        "Google Sheets",
        "Data Visualization"
      ],
      kpis: [
        "Content Distribution: Movies vs TV Shows ratio (4,265 movies vs 1,629 TV shows)",
        "Temporal Analysis: Content addition trends from 2001-2020 with growth acceleration around 2015-2016",
        "Geographic Diversity: Content origin distribution across countries with interactive choropleth mapping",
        "Genre Performance: Top 10 genres ranked by frequency including documentaries, stand-up comedy, and international content",
        "Audience Targeting: Content rating distribution (TV-MA, TV-14, R ratings) for demographic analysis"
      ],
      insights: [
        {
          title: "Movies Dominate Content Library",
          finding: "Movies represent 72.4% of Netflix's library (4,265 titles) compared to 27.6% TV shows (1,629 titles), indicating a strong focus on feature-length content.",
          recommendation: "Consider increasing TV show production or acquisition to provide more serialized content for binge-watching audiences."
        },
        {
          title: "Content Growth Acceleration",
          finding: "Significant acceleration in content addition starting around 2015-2016, coinciding with Netflix's global expansion strategy.",
          recommendation: "Analyze the correlation between content growth and subscriber acquisition to optimize content investment timing."
        },
        {
          title: "Documentaries Lead Genre Preferences",
          finding: "Documentaries are the most common single genre, followed by Stand-Up Comedy, indicating strong demand for educational and entertainment content.",
          recommendation: "Increase investment in documentary and comedy content while exploring genre combinations for broader appeal."
        },
        {
          title: "Mature Content Dominance",
          finding: "TV-MA rated content is the largest category, followed by TV-14 and R ratings, showing Netflix's focus on adult audiences.",
          recommendation: "Develop more family-friendly content to expand audience base while maintaining the mature content that drives current engagement."
        }
      ],
      challenges: [
        "Handling diverse genre combinations required careful parsing and categorization to create meaningful genre analysis.",
        "Geographic data standardization was challenging due to multiple country listings and regional variations in content classification.",
        "Temporal analysis required careful handling of missing dates and ensuring consistent date formatting across the dataset."
      ],
      lessons: [
        "Interactive visualizations like choropleth maps significantly enhance geographic data understanding and user engagement.",
        "Combining multiple chart types (pie charts, line charts, bar charts) creates comprehensive dashboards that tell complete stories.",
        "Temporal trend analysis reveals strategic business decisions and can inform future content planning and investment decisions."
      ],
             images: [
               "netflix_vizzes/netflix_dashboard.png",
               "netflix_vizzes/n1.png",
               "netflix_vizzes/n2.png",
               "netflix_vizzes/n3.png",
               "netflix_vizzes/n4.png",
               "netflix_vizzes/n5.png"
             ],
       externalLink: "https://public.tableau.com/views/Netflix_17552082878090/Dashboard1_1?:showVizHome=no"
     },
     "joby-hunter": {
       id: "joby-hunter",
       title: "JobyHunter — AI-driven Talent Acquisition System",
       subtitle: "Revolutionizing Recruitment Through Data-Driven Intelligence",
       overview: "This comprehensive talent acquisition platform combines AI-powered candidate screening with advanced analytics to transform the recruitment process. The system integrates web scraping, candidate management, and HR analytics to provide actionable insights for optimizing hiring strategies and improving recruitment outcomes.",
       objectives: [
         "Streamline Recruitment Pipeline: Automate candidate screening and application processing to reduce manual workload and improve efficiency.",
         "Enhance Candidate Quality: Implement AI-driven screening to identify high-quality candidates and reduce time-to-hire.",
         "Provide Recruitment Analytics: Create comprehensive dashboards to track key recruitment metrics and identify optimization opportunities.",
         "Optimize Skill Matching: Analyze required skills across job positions to identify skill gaps and inform hiring strategies.",
         "Improve Decision Making: Provide data-driven insights for recruitment planning and resource allocation."
       ],
       dataSources: "Multi-source data integration including SQL Server (structured application data), MongoDB (candidate profiles and unstructured data), and web scraping (job descriptions and market data)",
       dataModel: "Hybrid data architecture combining relational database (SQL Server) for structured application data with NoSQL (MongoDB) for flexible candidate profiles. Power BI serves as the analytics layer connecting all data sources for comprehensive reporting.",
       tools: [
         "Python",
         "ASP.NET Core",
         "Angular",
         "MongoDB",
         "SQL Server",
         "Power BI",
         "Selenium"
       ],
       kpis: [
         "Application Pipeline Health: Application status distribution (Approved: 60.32%, Pending: 30.16%, Rejected: 9.52%)",
         "Recruitment Volume: Total jobs tracked (10) and applications received (63) across all positions",
         "Temporal Trends: Monthly application volume tracking to identify seasonal patterns and campaign effectiveness",
         "Skill Demand Analysis: Job title to required skills mapping using treemap visualization",
         "Role-specific Performance: Application status breakdown by job title for targeted recruitment optimization"
       ],
       insights: [
         {
           title: "High Approval Rate Indicates Quality Screening",
           finding: "60.32% of applications are approved with only 9.52% rejected, suggesting effective initial screening or highly qualified applicant pool.",
           recommendation: "Analyze screening criteria to ensure optimal balance between quality and quantity, and consider expanding candidate sources if needed."
         },
         {
           title: "Significant Pending Applications Require Attention",
           finding: "30.16% of applications are in pending status, indicating potential bottlenecks in the recruitment process.",
           recommendation: "Implement automated follow-up systems and streamline approval workflows to reduce time-to-decision and improve candidate experience."
         },
         {
           title: "Skill Gap Analysis Reveals Hiring Priorities",
           finding: "Treemap visualization shows varying skill demands across job titles, highlighting areas where skill development or targeted recruitment is needed.",
           recommendation: "Use skill demand data to inform training programs, adjust job requirements, or target specific candidate pools."
         },
         {
           title: "Monthly Trends Enable Strategic Planning",
           finding: "Line chart analysis of application volume by month reveals patterns that can inform recruitment campaign timing and resource allocation.",
           recommendation: "Align recruitment campaigns with peak application periods and adjust hiring timelines based on seasonal trends."
         }
       ],
       challenges: [
         "Integrating multiple data sources (SQL Server, MongoDB, web scraping) required complex data modeling and ETL processes to ensure data consistency and real-time updates.",
         "Implementing AI-driven candidate screening while maintaining human oversight and avoiding bias required careful algorithm design and validation.",
         "Creating a responsive and intuitive dashboard that serves both technical and non-technical HR users required balancing complexity with usability."
       ],
       lessons: [
         "Hybrid data architectures combining relational and NoSQL databases provide flexibility for handling diverse recruitment data types while maintaining performance.",
         "Real-time data integration from web scraping enhances market intelligence but requires robust error handling and data validation processes.",
         "Interactive dashboards with drill-down capabilities enable HR teams to move from high-level insights to actionable, role-specific recommendations."
       ],
               images: ["joby_hunter_dashboard.png"]
      },
      "sales-insights": {
        id: "sales-insights",
        title: "Sales Insights Engine",
        subtitle: "Powering Business Decisions Through Advanced Sales Analytics",
        overview: "This comprehensive sales performance dashboard leverages SQL Server Data Warehouse architecture and Power BI with DAX measures to analyze sales performance across multiple dimensions. The project identifies critical sales pipeline issues, tracks product performance, and provides actionable insights for inventory planning and marketing strategy optimization.",
        objectives: [
          "Sales Performance Analysis: Track sales trends across time periods and identify seasonal patterns to inform strategic planning.",
          "Pipeline Health Monitoring: Analyze order status distribution to identify bottlenecks and problematic areas in the sales process.",
          "Product Performance Assessment: Compare sales performance across different product lines and track year-over-year growth.",
          "Daily Trend Analysis: Identify peak sales days and patterns to optimize inventory management and marketing campaigns.",
          "Data-Driven Decision Making: Provide stakeholders with actionable insights for improving sales operations and customer satisfaction."
        ],
        dataSources: "Synthetic sales dataset with comprehensive transaction records including order details, product information, and customer data",
        dataModel: "Star Schema data warehouse with Fact Table: FactSales (Sales amount, DateKey, StatusKey, ProductKey) and Dimension Tables: Dim Date (Date, Jour, Mois, Annee), Dim Status (StatusKey, Status), Dim Product (ProductKey, Product Line). DAX measures provide calculated aggregations and time intelligence.",
        tools: [
          "SQL Server",
          "Power BI",
          "DAX",
          "Data Warehouse Design"
        ],
        kpis: [
          "Total Sales Performance: Grand total of 72K in sales value across all dimensions",
          "Sales by Month & Status: Monthly trends with status breakdown (Month 9: 32K highest)",
          "Order Status Distribution: Shipped (44.07%), Disputed (36.02%), Cancelled (19.91%)",
          "Daily Sales Trends: Peak performance around days 17-18 (~26K), troughs on day 5 (~4K)",
          "Product Line Performance: Year-over-year comparison across Classic Cars, Motorcycles, Planes"
        ],
        insights: [
          {
            title: "Critical Sales Pipeline Issues Identified",
            finding: "Over 55% of sales value is tied up in problematic statuses (Disputed: 36.02%, Cancelled: 19.91%), with only 44.07% in 'Shipped' status.",
            recommendation: "Implement immediate customer service interventions for disputed orders and review cancellation policies to reduce order abandonment rates."
          },
          {
            title: "Monthly Performance Volatility",
            finding: "Month 9 shows highest sales (32K) while Month 5 has concerning high values for 'Cancelled' and 'Disputed' statuses, indicating potential operational issues.",
            recommendation: "Investigate Month 5 operational challenges and replicate Month 9 success factors across other periods."
          },
          {
            title: "Daily Sales Pattern Optimization",
            finding: "Significant sales peaks around days 17-18 (~26K) and troughs on day 5 (~4K), revealing clear patterns for resource allocation.",
            recommendation: "Align inventory restocking, staffing, and marketing campaigns with peak sales days to maximize revenue opportunities."
          },
          {
            title: "Product Line Performance Insights",
            finding: "Classic Cars emerge as the top-performing product line, with clear year-over-year trends visible across all product categories.",
            recommendation: "Increase investment in Classic Cars category and analyze success factors to apply to underperforming product lines."
          }
        ],
        challenges: [
          "Designing an efficient star schema data model that balances query performance with analytical flexibility required careful consideration of dimension granularity and fact table design.",
          "Creating DAX measures that provide accurate time intelligence and handle complex filtering scenarios while maintaining dashboard responsiveness.",
          "Balancing the need for detailed analysis with dashboard usability, ensuring both technical and business users can derive value from the insights."
        ],
        lessons: [
          "Star schema data modeling provides excellent performance for analytical queries while maintaining data integrity and enabling complex DAX calculations.",
          "DAX measures with proper time intelligence functions enable powerful trend analysis and year-over-year comparisons that drive strategic decision-making.",
          "Combining multiple chart types (stacked columns, donut charts, line charts) creates comprehensive dashboards that tell complete business stories and reveal actionable insights."
        ],
        images: ["sum_of_sales_by_month_and_status.png", "sum_of_sales_by_day.png"]
      },
      "vivo-mobile-phones-analysis": {
        id: "vivo-mobile-phones-analysis",
        title: "Vivo Mobile Data Analysis — Turning Raw Specs into Market Insights",
        subtitle: "Transforming Raw Phone Data into Strategic Business Intelligence",
        overview: "Analyzed Vivo mobile phone specifications to uncover strategic product positioning and consumer preferences. Applied Excel data cleaning techniques and PivotTable analysis to transform raw specification data into actionable business intelligence. Identified key market trends and popular configurations that drive Vivo's strategic focus on the budget and mid-range mobile phone market.",
        objectives: [
          "Identify most popular RAM/ROM combinations",
          "Analyze processor performance and customer ratings correlation",
          "Determine Vivo's strategic market positioning",
          "Create comprehensive dashboard for business insights"
        ],
        dataSources: "CSV dataset containing Vivo mobile phone specifications including RAM, ROM, processor types, battery capacity, and customer ratings",
        dataModel: "Structured dataset with phone specifications as categorical variables (RAM, ROM, processor, battery) and numerical variables (ratings). Utilized Excel's data manipulation features including Text to Columns, PivotTables, and PivotCharts for analysis.",
        tools: [
          "Microsoft Excel (PivotTables, PivotCharts, Text to Columns, Formulas)"
        ],
        kpis: [
          "Most Common Configuration: 8GB RAM with 128GB ROM combination frequency",
          "Processor Performance: Average ratings by processor type (Mediatek Helio P35, Qualcomm Snapdragon 680)",
          "Battery Strategy: Most common processor for phones with 5000mAh battery capacity",
          "RAM Distribution: Phone count distribution across different RAM configurations",
          "Rating Analysis: Highest average rating combinations by RAM and ROM specifications"
        ],
        insights: [
          {
            title: "8GB RAM + 128GB ROM was the most demanded configuration",
            finding: "The most frequent combination of specifications is 8GB RAM with 128GB ROM, highlighting Vivo's focus on providing a popular configuration that balances performance with affordability.",
            recommendation: "Continue investing in this configuration while exploring opportunities to optimize costs and expand market share in this segment."
          },
          {
            title: "Mid-range processors dominate Vivo's lineup",
            finding: "The most common processors are the Mediatek Helio P35 and Qualcomm Snapdragon 680, frequently paired with 5000mAh batteries, suggesting a clear strategy of targeting the budget and mid-range market.",
            recommendation: "Leverage this positioning by emphasizing battery life and value proposition in marketing campaigns while maintaining competitive pricing."
          },
          {
            title: "Strategic focus on value-driven market segment",
            finding: "Analysis reveals Vivo's clear positioning in the budget and mid-range market with processor-battery combinations optimized for long-lasting performance at competitive prices.",
            recommendation: "Use this positioning to differentiate from premium competitors and capture market share in the growing value-conscious consumer segment."
          }
        ],
        challenges: [
          "Raw data required extensive cleaning using Excel's Text to Columns feature to separate combined data fields and extract numerical ratings from text strings",
          "Creating meaningful PivotTables that effectively communicate business insights while maintaining data integrity and accuracy"
        ],
        lessons: [
          "Excel's data cleaning capabilities, particularly Text to Columns and formula functions, are essential for preparing raw data for analysis",
          "PivotTables and PivotCharts are powerful tools for exploratory data analysis and can reveal patterns not immediately obvious in raw data"
        ],
        images: [
          "vivo_phones/dashboard.png",
          "vivo_phones/pivot_table_Common combination of RAM and ROM.png",
          "vivo_phones/pivot_table_Highest average rating by RAM and ROM.png",
          "vivo_phones/pivot_table_most common processor for phones with a 5000 mAh battery.png",
          "vivo_phones/pivot_table_phones_by_ram.png",
          "vivo_phones/pivot_table_processor_by_rating.png"
        ]
      }
    ,
    "data-professional-survey-analysis": {
      id: "data-professional-survey-analysis",
      title: "Data Professional Survey Analysis Dashboard",
      subtitle: "Transforming Global Survey Responses into Actionable BI Insights",
      overview: "A comprehensive Business Intelligence (BI) dashboard developed in Microsoft Power BI that turns hundreds of raw responses from a global data professional survey into interactive, actionable insights covering compensation, role hierarchy, skills, geography, and satisfaction metrics.",
      objectives: [
        "Make complex survey data accessible to non-technical stakeholders",
        "Provide clear insights into compensation and role hierarchy across the data profession",
        "Quantify job satisfaction across salary and work/life balance dimensions",
        "Highlight in-demand skills and preferred programming languages",
        "Enable interactive exploration by country, role, and experience level"
      ],
      dataSources: "Global Data Professionals Survey (630 respondents)",
      dataModel: "Power BI model with cleaned and standardized survey tables. Power Query used for ETL (title grouping, salary range parsing to numeric averages, text normalization). DAX measures compute averages and segment-level KPIs for satisfaction, demographics, and compensation.",
      tools: [
        "Microsoft Power BI Desktop",
        "Power Query (M)",
        "DAX",
        "Data Visualization"
      ],
      kpis: [
        "Average Salary by Role",
        "Happiness with Work/Life Balance (0–10)",
        "Happiness with Salary (0–10)",
        "Favorite Programming Language Distribution",
        "Respondent Count by Country",
        "Entry Difficulty Distribution"
      ],
      insights: [
        {
          title: "Data Scientists Lead in Compensation",
          finding: "Data Scientists have the highest average salary, followed by Data Architects and Data Engineers.",
          recommendation: "Prioritize hiring and retention strategies for these roles; align compensation bands with market benchmarks."
        },
        {
          title: "Satisfaction Gap Identified",
          finding: "Work/Life Balance happiness averages 5.74/10 versus Salary happiness at 4.27/10, indicating a notable disparity.",
          recommendation: "Improve compensation transparency and review pay structures while preserving positive work/life balance policies."
        },
        {
          title: "Python Dominates Skill Preference",
          finding: "Python is the overwhelmingly favorite programming language among respondents.",
          recommendation: "Invest in Python training and tooling; standardize analytics stacks around Python where feasible."
        },
        {
          title: "Entry Perceived as Moderately Difficult",
          finding: "42.7% report breaking into the field as 'Neither easy nor difficult'.",
          recommendation: "Offer internships, mentorships, and skill-bridging programs to reduce perceived barriers to entry."
        },
        {
          title: "United States Leads Respondent Geography",
          finding: "The largest share of respondents is based in the United States.",
          recommendation: "Tailor regional hiring and community programs to major respondent hubs while expanding outreach in underrepresented regions."
        }
      ],
      challenges: [
        "Standardizing free-text job titles into usable role groups",
        "Parsing and averaging salary ranges into numeric values for analysis",
        "Designing visuals that balance detail with clarity across multiple segments"
      ],
      lessons: [
        "End-to-end BI workflow proficiency: ETL, modeling, DAX, and UX design",
        "Careful data standardization is essential for reliable KPI comparisons",
        "Interactive design (cross-filtering, drill-down) enhances stakeholder understanding and engagement"
      ],
      images: [
        "Survey_Analysis/Survey_Dashboard.png",
        "Survey_Analysis/bar_chart_average_salary_by_job_title.png",
        "Survey_Analysis/column_chart_favorite_programming_language.png",
        "Survey_Analysis/donut_chart_how_difficult_to_break_into_data.png",
        "Survey_Analysis/kpi_happiness_with_salary.png",
        "Survey_Analysis/kpi_happy_with_work_life_balance.png",
        "Survey_Analysis/tree_map_country_of_survey_takers.png"
      ]
    },
    "esports-championship-analytics": {
      id: "esports-championship-analytics",
      title: "Maghreb Esports Championship Analytics Platform",
      subtitle: "Transforming Esports Data into Strategic Competitive Intelligence",
      overview: "This comprehensive SQL analytics project was developed for a regional esports championship organization to analyze tournament performance, team dynamics, and player statistics across multiple gaming platforms. The solution provides tournament organizers, team managers, and stakeholders with data-driven insights to optimize competitive strategies, identify talent, and enhance the overall esports ecosystem in the Maghreb region.",
      objectives: [
        "Tournament Performance Analysis: Track team rankings, match outcomes, and competitive trends across different games and seasons.",
        "Player Transfer Intelligence: Identify player movement patterns and analyze the impact of transfers on team performance.",
        "Competitive Dynamics Mapping: Analyze team rivalries, head-to-head records, and regional competitive balance.",
        "Strategic Insights Generation: Provide actionable recommendations for tournament scheduling, team scouting, and competitive development.",
        "Performance Metrics Development: Create comprehensive KPIs for measuring team and player success across multiple dimensions."
      ],
      dataSources: "EsportsChampionship database containing tournament data, team rosters, player information, match results, and prize pool details across multiple gaming platforms",
      dataModel: "Relational database with 6 core tables: Game (game metadata), Team (team information), Player (player profiles), TeamPlayer (roster management with temporal data), Tournament (competition details), Match (match results and statistics). Utilized advanced SQL techniques including window functions, CTEs, and complex joins for comprehensive analysis.",
      tools: [
        "SQL Server",
        "T-SQL",
        "Database Design",
        "Performance Analytics"
      ],
      kpis: [
        "Team Rankings: Global team standings using point system (win=3, draw=1, loss=0)",
        "Win Rate Analysis: Percentage-based performance metrics by team and game",
        "Player Transfer Tracking: Identification of players with multiple team affiliations",
        "Match Performance: Average match duration, score differentials, and competitive intensity",
        "Tournament Insights: Prize pool distribution, participation rates, and seasonal trends",
        "Regional Analysis: Country-based performance metrics and competitive balance"
      ],
      insights: [
        {
          title: "Competitive Balance Analysis",
          finding: "Analysis revealed significant competitive disparities between teams, with top-performing teams maintaining win rates above 70% while lower-tier teams struggled with sub-30% win rates.",
          recommendation: "Implement tier-based tournament structures and development programs to improve competitive balance and overall league health."
        },
        {
          title: "Player Transfer Impact",
          finding: "Players who transferred between teams showed 15% improvement in performance metrics, suggesting that strategic roster changes can significantly enhance team competitiveness.",
          recommendation: "Develop transfer market analytics to help teams identify optimal player acquisitions and improve roster management strategies."
        },
        {
          title: "Tournament Scheduling Optimization",
          finding: "Matches with score differentials ≥3 points occurred in 40% of games, indicating potential scheduling or seeding issues affecting competitive balance.",
          recommendation: "Revise tournament seeding algorithms and implement more balanced matchmaking to ensure competitive matches and viewer engagement."
        },
        {
          title: "Regional Performance Trends",
          finding: "Tunisian teams demonstrated strong performance consistency, with multiple teams ranking in the top 10 across different games and seasons.",
          recommendation: "Study successful strategies from top-performing regions and implement knowledge-sharing programs to elevate overall regional competitiveness."
        }
      ],
      challenges: [
        "Managing temporal data complexity in TeamPlayer relationships required sophisticated SQL techniques to track player rosters accurately across different time periods.",
        "Creating meaningful team rankings required developing custom point systems and handling edge cases in match result calculations.",
        "Analyzing player transfer patterns demanded complex queries to identify players with multiple team affiliations while maintaining data integrity."
      ],
      lessons: [
        "Advanced SQL techniques including window functions, CTEs, and temporal queries are essential for analyzing complex relational data in sports analytics.",
        "Designing flexible database schemas with proper temporal relationships enables comprehensive historical analysis and trend identification.",
        "Creating meaningful performance metrics requires understanding both the technical aspects of data analysis and the business context of competitive sports."
      ],
      images: [],
      externalLink: "https://github.com/RBenOthmen/ESports-Championship.git"
    }
    };
