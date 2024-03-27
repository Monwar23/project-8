import { Bar, BarChart, XAxis, YAxis} from "recharts";


const BarGraph = ({books}) => {


    return (
        <div>
            <BarChart width={1000} height={400} data={books}>
                    <XAxis dataKey='bookName'></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey='totalPages' stroke="blue" fill="red" ></Bar>
                </BarChart>
        </div>
    );
};

export default BarGraph;