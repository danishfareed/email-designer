import React, {useState} from 'react'
import unlayerTemplates from '../data/unlayerTemplates'
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { saveAs } from 'file-saver';


 
const Templates = () => {
const [templateCount, settemplateCount] = useState(1)
// const templatesData = 
const fetchMoreData = () =>{
    console.log("fetch hoja")
}
// const doneData = [1006,1010,1013,1014,1015,1016,1019,1020,1023,1024,1028,1029,1030,1032,1044,1045,1048,1055,1067,1069,1069,1073,1078,1086,1090,1091,1093,1094,1098,1099,1134,1135,1136,1138,1144,1145,1151,1153,1154,1155,1156,1159,1160,1161,1163,1172,1176,1178,1179,1181,1183,1185,1187,1188,1194,1198,1200,1205,1208,1210,1244,1245,1246,1249,1253,1258,1274,1276,1277,1279,1281,1282,1292,1296,1298,1302,1303,1306,1307,1308,1309,1312,1314,1316,1357,1360,1362,1364,1365,1369,1373,1380,1387,1390,1397,1398,1399,1402,1413,1420,1422,1425,1427,1432,1449,1450,1452,1455,1456,1457,387,389,390,394,396,397,400,405,406,407,408,409,415,454,455,457,460,462,463,465,467,479,481,515,516,517,520,522,524,528,529,531,532,535,539,540,541,542,544,546,547,550,551,552,556,558,562,563,566,570,575,576,577,581,587,596,598,615,624,629,631,632,641,643,644,645,661,662,667,675,676,677,678,679,682,683,690,693,696,702,703,704,706,707,709,710,712,713,714,715,718,719,723,725,726,732,736,737,738,742,744,746,748,750,789,790,793,794,796,797,800,804,807,808,810,812,813,817,818,819,820,821,822,823,825,825,826,827,836,837,841,842,847,850,851,852,854,857,858,859,860,861,862,864,865,866,867,869,873,874,876,878,879,880,881,882,883,883,884,888,889,893,894,895,900,902,903,904,906,910,913,916,917,919,920,921,926,929,932,933,937,939,943,944,946,948,949,952,953,955,960,961,962,963,967,968,971,972];
const getDesign = async (slug) =>{
    const { data, status } = await axios.post(`https://api.graphql.unlayer.com/graphql`, {
        "operationName": "StockTemplateLoad",
        "variables": {
            "slug": slug
        },
        "query": "query StockTemplateLoad($slug: String!) {\n  StockTemplate(slug: $slug) {\n    id\n    name\n    design\n    usage\n    industry\n    tags\n    premium\n    rating\n    votes\n    StockTemplatePages {\n      id\n      name\n      design\n      html\n      position\n      __typename\n    }\n    __typename\n  }\n}"
    },{
        // headers: {
        //     'Access-Control-Allow-Origin' : '*',
        // },
    });

    if(status===200){
        return data;
    }else{
        return data;
    }
}

const scrapEverything = () =>{
    unlayerTemplates?.map(
        template => {
            // if(!doneData.includes(template.id)){
                getDesign(template.slug).then(res=>{
                    let fileName = `${template.id}.json`;
    
                    // Create a blob of the data
                    let fileToSave = new Blob([JSON.stringify(res)], {
                        type: 'application/json'
                    });
    
                    // Save the file
                    saveAs(fileToSave, fileName);
                })
            // }
        }
    )
}
 return (
    <>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <button onClick={scrapEverything}>scrap it</button>
    <h1 class="text-4xl font-bold pb-8">Templates</h1>
        
        <InfiniteScroll
        dataLength={20}
        next={fetchMoreData}
        hasMore={unlayerTemplates?.length !== unlayerTemplates?.length}
        loader={<div className="loader" key={0}>Loading ...</div>}
        >
            <div className="gap-8 columns-4">
            {unlayerTemplates?.map(
            template => {
                return <>
                <div className="card card-compact w-full mb-12 bg-base-100 shadow-xl overscroll-x-contain hover:shadow-2xl" key={template?.id}>
                    <figure><img className="max-h-2xl" src={template?.previewUrl} alt={template?.name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">{template?.name}</h2>
                        <div className="card-actions justify-center">
                        <a href={`/?templateId=${template?.id}`} className="link">Use this</a>
                        </div>
                    </div>
                </div> </>
            })}
            </div>
        </InfiniteScroll>
    </div>
    </>
  )
}

export default Templates