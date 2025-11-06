export default function UFCEventAnalysis() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Maximize the Octagon: Where &amp; When to Fight Next ?</h1>

      <div className="mb-8 rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50">
        <p className="text-gray-800 dark:text-gray-200">
          <strong>Are we putting our biggest fights in the best possible spots and at the perfect time?</strong><br />
          <b>Presenter:</b> Rami Ben Othmen<br />
          <b>Role:</b> Junior Data Analyst<br />
          <b>Date:</b> November 2025
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Where is Our Operational Focus?</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200">
          <li><b>The Americas are the Core:</b> The U.S. is deep green (highest density, 120+ events), with Canada and Brazil close behind in high-density red/orange.</li>
          <li><b>Europe is Fragmented:</b> Regions like the UK, Ireland, and Germany host events, but their density is much lower, indicating a less frequent presence.</li>
          <li><b>Key Revenue Markets are Light:</b> High-value markets like the UAE and Australia show very low density, confirming that we visit them rarely.</li>
          <li>Over 80% of our effort is concentrated in North and South America. This provides operational ease but limits global exposure.</li>
        </ul>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          <b>What are the exact regions that we're focusing on?</b><br />
          This world map shows us the geographical distribution of our resources by coloring each region based on the total Number of Events it has hosted.
        </p>
        <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <iframe src="/assets/projects/plots/regions_by_nb_events.html" className="w-full" style={{ height: 600 }} />
        </div>
      </div>

      <div className="mb-8 rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Operational Focus - Where Do We Fight Most?</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200">
          <li><b>Nevada is the Global Hub:</b> Nevada hosts nearly four times more events than the second-place region, confirming it as our operational capital.</li>
          <li><b>Operational Concentration:</b> The Top 5 (Nevada, California, Brazil, Texas, New York) host a massively disproportionate share of all events, with Nevada taking the lion's share.</li>
          <li><b>Global Reach is Limited:</b> Regions like Germany, Ireland, and Japan, host very few events, signaling a highly concentrated operational focus.</li>
          <li><b>Efficiency vs. Opportunity:</b> The heavy focus on Nevada is operationally efficient, but it might mean we are leaving money on the table in high-value, underutilized some other markets.</li>
          <li><b>Brazil's Commitment:</b> Brazil ranks third in volume, yet its event performance is low (as we'll see next).</li>
          <li>We need to focus on increasing the density in high-return but low-density regions.</li>
        </ul>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          <b>What are those regions?</b><br />
          This bar chart reveals where the organization actually spends its time and effort by comparing the Top 5 and Bottom 5 regions based on the sheer number of events hosted.
        </p>
        <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <iframe src="/assets/projects/plots/top_and_bottom_regions_by_nb_events.html" className="w-full" style={{ height: 600 }} />
        </div>
      </div>

      <div className="mb-8 rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Performance Trade-Offs: Attendance vs. Buyrate</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200">
          <li><b>UAE is the Key:</b> It sits alone in the High Buyrate / Low Attendance quadrant, proving its value is 100% in PPV revenue, not live gate.</li>
          <li><b>Australia is the Live Gate King:</b> Australia generates one of our highest average Attendances with a very respectable Buyrate.</li>
          <li><b>The US and Canada Sweet Spot:</b> These two major markets land squarely in the High Buyrate / High Attendance zone, confirming their status as reliable dual-revenue powerhouses.</li>
          <li><b>Max PPV:</b> UAE (Book our biggest global draws here).</li>
          <li><b>Max Live Gate:</b> Australia (A great place for stadium shows).</li>
          <li><b>Max Both:</b> U.S and Canada (The foundation for championship fights).</li>
        </ul>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          <b>What is the best time to host an event?</b><br />
          This chart plots every region's average Live Gate (Attendance) against its average PPV Buys (Buyrate). The bubble size is the number of events.
        </p>
        <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <iframe src="/assets/projects/plots/attendance_vs_buyrate.html" className="w-full" style={{ height: 600 }} />
        </div>
      </div>

      <div className="mb-8 rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">The Calendar Effect - When is the Best Time to Fight?</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200">
          <li><b>The "Big Four" Months:</b> January, July, November, and December are our consistent peak months for PPV purchases.</li>
          <li><b>November is Peak Live Gate:</b> Attendance hits its highest point in November.</li>
          <li><b>Summer Slump:</b> Buyrate and Attendance both see significant dips in the late spring and early summer months, particularly June and September.</li>
          <li><b>The Holiday Bump is Real:</b> Our peak months align with major holidays (New Year's, Summer break and Thanksgiving/Christmas season). People are home, free, and looking for entertainment.</li>
          <li><b>Scheduling Strategy:</b> We should schedule our biggest, most expensive pay-per-view cards (like major title defenses) in November (to maximize both Buyrate and Attendance) or December/January (to maximize pure Buyrate).</li>
          <li><b>Promotional Opportunity:</b> Low months like June and September are perfect for "Fight Night" events or cards focused on building up new contenders, saving star power for the peak months.</li>
        </ul>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          This dual-axis line chart shows us the average Buyrate (left axis, blue line) and Attendance (right axis, red line) for events across every month of the year.
        </p>
        <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <iframe src="/assets/projects/plots/buyrate_and_attendance_by_month.html" className="w-full" style={{ height: 600 }} />
        </div>
      </div>

      <div className="mb-8 rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Overall Synthesis &amp; Key Actionable Insights</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200">
          <li><b>The Global Value Disparity is Huge:</b> The UAE is the global leader in average Buyrate, yet it is one of our least-visited markets (low density on the map). This is our biggest missed opportunity.</li>
          <li><b>High Investment, Low Return:</b> Our high operational commitment to Brazil (third in event count) is not justified by its low average revenue metrics (low Buyrate/low Attendance). This investment needs review.</li>
          <li><b>Operational Hub vs. Revenue Potential:</b> We are heavily concentrated in Nevada (efficiency), but our highest revenue potential is often generated in international markets (UAE, Canada, Australia) during key seasonal windows.</li>
          <li><b>Seasonality is Non-Negotiable:</b> The seasonal peaks in Buyrate (Jan, Jul, Nov, Dec) are consistent and must be respected. Scheduling a major star outside of these windows means risking revenue loss.</li>
        </ul>
      </div>

      <div className="mb-8 rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">The Big Question Answered</h2>
        <p className="text-gray-800 dark:text-gray-200">
          <b>Where and When Should We Fight Next to Maximize Revenue?</b>
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200 mt-2">
          <li>
            Aggressively increase event frequency in the UAE (currently low density on the map) to capitalize on its exceptional average Buyrate (over $1M), recognizing that the immediate live gate revenue is secondary.
          </li>
          <li>
            Target the U.S. and Canadian markets, focusing on major metropolitan areas in the November/December window. This period hits the seasonal Buyrate peak and the annual Attendance peak, guaranteeing maximum dual-revenue performance.
          </li>
          <li>
            Maintain high operational efficiency in Nevada, but ensure we are leveraging high-attendance markets like Australia for at least one annual stadium event to drive live gate revenue and brand presence in the region (currently low density on the map).
          </li>
        </ul>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          <b>Next Step:</b> Let's conduct a deeper dive into the specific characteristics (e.g., fight card type, time of day) of the events held in November versus June to understand the drivers of seasonality.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Thank You!</h2>
      </div>
    </div>
  );
}


