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
    images: ["joby_hunter_dashboard.png"],
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
    images: ["sum_of_sales_by_month_and_status.png"],
    hasDetailedView: true
  },

  {
    id: "employee-performance-analytics",
    title: "Employee Performance & Analytics",
    description: "End-to-end HR analytics solution analyzing performance, absenteeism, turnover, and training data to provide actionable insights for improving employee retention and optimizing training programs.",
    tools: "Tableau Desktop, Google Sheets, Tableau Public",
    role: "Data analysis, visualization, and dashboard design",
    results: "Identified key workforce trends and provided strategic recommendations for employee retention and training optimization.",
    images: ["employee_analysis_vizzes/Absence Analysis dashboard.png", "employee_analysis_vizzes/turnover_dashboard.png", "employee_analysis_vizzes/performance_dashboard.png"],
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
    images: ["education_dashboard.png"],
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
    images: ["vivo_phones/dashboard.png"],
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
    };
