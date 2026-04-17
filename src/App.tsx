
import Nav from "./components/Nav"

import { ChartLineInteractive } from "@/components/chart/chart-line-interactive"
import { ChartPieSimple } from "@/components/chart/chart-pie-label"
import { ChartRadarGridFill } from "@/components/chart/chart-radar-grid-fill"
import { ChartBarMultiple } from "@/components/chart/BarChart"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col w-full overflow-x-hidden">

     
      <Nav />

   
      <div className="w-full p-4 md:p-6 space-y-6">

        {/* TOP STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm">Total Sales</p>
            <h2 className="text-2xl font-bold">$154,430</h2>
            <p className="text-xs text-gray-400">Day Sales $15,443</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm">Visits</p>
            <h2 className="text-2xl font-bold">6,480</h2>
            <p className="text-xs text-gray-400">Day visits 4,280</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm">Payments</p>
            <h2 className="text-2xl font-bold">5,320</h2>
            <p className="text-xs text-gray-400">Conversion rate 50%</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-gray-500 text-sm">Operation Effect</p>
            <h2 className="text-2xl font-bold text-blue-500">88%</h2>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* BIG CHART */}
         {/* <div className="h-full w-full">
  <ChartBarMultiple />
</div> */}

<div className="w-full rounded-xl shadow-sm overflow-hidden bg-amber-600
                h-50 
                sm:h-100 
                md:h-92.5 
                lg:h-145 
                lg:col-span-2
                flex items-center justify-center">
  <ChartBarMultiple />
</div>
          {/* RIGHT SIDE */}
          <div className="space-y-6">

            <div className="bg-white p-4 rounded-xl shadow-sm overflow-hidden">
              <h2 className="font-semibold mb-3">Performance</h2>
              <ChartRadarGridFill /> 
            </div>

            {/* <div className="bg-white p-4 rounded-xl shadow-sm">
              <h2 className="font-semibold mb-3">Sales Ranking</h2>

              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex justify-between py-2 border-b last:border-none"
                >
                  <span>No. {i} Shop</span>
                  <span className="text-gray-500">432,641</span>
                </div>
              ))}
            </div> */}

          </div>
        </div>

        {/* BOTTOM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-sm overflow-hidden">
            <ChartLineInteractive />
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm overflow-hidden">
            <ChartPieSimple />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App