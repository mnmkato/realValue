import { useState, useEffect } from 'react'
interface PlotItem {
    location: string;
    size: string;
    initialValue: number;
    aqusitionDate: Date;
  }
export default function Plot({ plot_item }: { plot_item: PlotItem }){
    const growthRate = 17 / 100 / 365 / 24 / 60 / 60; // 17% Growth rate per second

    const [plotValue, setPlotValue] = useState<number>(plot_item.initialValue);

   const getAgeInSeconds = (): number => {
        const now = new Date();
        const ageInMilliseconds = now.getTime() - plot_item.aqusitionDate.getTime();
        return Math.floor(ageInMilliseconds / 1000); 
    };

    // Function to update the plot value and age in real-time
    const updateValues = () => {
        const age = getAgeInSeconds(); // Get the current age in seconds
        const newValue = plot_item.initialValue * Math.pow(1 + growthRate, age); // Calculate new plot value
        setPlotValue(newValue); // Update the plot value
    };

    // Set up an interval to update the values every second
    useEffect(() => {
        updateValues(); // Initial update
        const interval = setInterval(updateValues, 1000); // Update every second

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return(<>
     <div className="plot_div">
                <h2>{plot_item.location}</h2>
                <h3>{plot_item.size}</h3>
                <h3>{plot_item.aqusitionDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        })}
                </h3>
                <h1>
                    {plotValue.toLocaleString('en-UG', {
                        style: 'currency',
                        currency: 'UGX',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </h1>
            </div>
    </>)
}