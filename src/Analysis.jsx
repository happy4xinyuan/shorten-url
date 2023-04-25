import ReactEchart from "echarts-for-react";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";
import { Header } from "./Header";
import "./Analysis.css";

export default function Analysis() {
    const user = sessionStorage.getItem('user');

  const topGenerateMock = [
    { month: "2022-05", count: 100 },
    { month: "2022-06", count: 60 },
    { month: "2022-07", count: 120 },
    { month: "2022-08", count: 10 },
    { month: "2022-09", count: 20 },
    { month: "2022-10", count: 0 },
    { month: "2022-11", count: 50 },
    { month: "2022-12", count: 31 },
    { month: "2023-01", count: 20 },
    { month: "2023-02", count: 40 },
    { month: "2023-03", count: 100 },
    { month: "2023-04", count: 232 },
  ];

  const top5WebsiteMock = 
    [
      {
        createTime: "2023-04-17 08:44:43",
        shortUrl: "sslt1.herokuapp.com/alFstGel",
        count: 203,
        longUrl:
          "https://docs.google.com/document/d/1I2_tTN_XTx8Ci_riWN2eTJv8JxeNK11HhfM5GC1Qu-8/edit?usp=sharing",
        updateTime: "2023-04-17 08:44:43",
      },
      {
        createTime: "2023-04-17 08:44:34",
        shortUrl: "sslt1.herokuapp.com/11jrz4I1",
        count: 139,
        longUrl:
          "https://docs.google.com/document/d/1I2_tTN_XTx8Ci_riWN2eTJv8JxeNK11HhfM5GC1Qu-8/edit?usp=sharing",
        updateTime: "2023-04-17 08:44:34",
      },
      {
        createTime: "2023-04-17 08:44:26",
        shortUrl: "sslt1.herokuapp.com/UaMWcL2M",
        count: 10,
        longUrl:
          "https://docs.google.com/document/d/1I2_tTN_XTx8Ci_riWN2eTJv8JxeNK11HhfM5GC1Qu-8/edit?usp=sharing",
        updateTime: "2023-04-17 08:44:26",
      },
      {
        createTime: "2023-04-17 08:44:18",
        shortUrl: "sslt1.herokuapp.com/hRZPewO2",
        count: 3,
        longUrl:
          "https://www.bilibili.com/video/BV1es4y1m7KZ/?spm_id_from=333.1007.tianma.1-3-3.click&vd_source=8591fd0d787ff7f4aa2d06d385af1106",
        updateTime: "2023-04-17 08:44:18",
      },
      {
        createTime: "2023-04-17 02:52:12",
        shortUrl: "sslt1.herokuapp.com/KNnS5FiL",
        count: 2,
        longUrl:
          "https://www.bilibili.com/video/BV12o4y1L73A/?spm_id_from=333.1007.tianma.1-1-1.click",
        updateTime: "2023-04-17 02:52:12",
      },
    ];

  const createData = (input) => {
    return {
      shortUrl: input.shortUrl,
      createTime: input.createTime,
      count: input.count,
      longUrl: input.longUrl,
    };
  };
  let rows = top5WebsiteMock.map((e) => createData(e));

  let eChartsOption = {
    xAxis: {
      data: topGenerateMock.map((e) => e.month),
      type: "category",
    },
    yAxis: {
      type: "value",
    },
    series: {
      data: topGenerateMock.map((e) => e.count),
      type: "bar",
    },
  };

  return (
    <div>
      <Header user={user} />
      <h1 className="text-header"> Monthly Visits in the Past Year </h1>
      <ReactEchart className="container" option={eChartsOption}></ReactEchart>
      <h1 className="text-header" style={{witdh:"80%"}}> Top 5 Visited URL in the Past Year </h1>
      <TableContainer className="container" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Short URL</TableCell>
              <TableCell align="left">Created Time</TableCell>
              <TableCell align="left">Visit Count</TableCell>
              <TableCell align="left">Long URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.shortUrl}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.shortUrl}
                </TableCell>
                <TableCell align="left">{row.createTime}</TableCell>
                <TableCell align="left">{row.count}</TableCell>
                <TableCell align="left">{row.longUrl}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
