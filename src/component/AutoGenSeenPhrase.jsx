import { IoIosArrowBack } from "react-icons/io";
import { FiChevronRight } from "react-icons/fi";
import { FaCopy } from "react-icons/fa";
import { ListName } from "../assets/ListName";
import { Row, Col } from "antd";
import { useEffect, useState } from "react";

// Bài 2
// Tạo 1 danh sách gồm 24 phần tử không trùng lặp nhau từ file JSON cho trước

function AutoGenSeenPhrase() {
  const [listData24, setListData24] = useState([]);
  useEffect(() => {
    const newData = ListName.sort(() => 0.5 - Math.random())
      .slice(0, 24)
      .map((i, index) => {
        return {
          name: i,
          index,
          temp: Math.floor(Math.random() * 100),
        };
      })
      .sort((d1, d2) => d2.temp - d1.temp)
      .map(({ temp, ...item }) => item)
      .slice(0, 24);
    setListData24(newData);
  }, []);
  console.log(
    "Tạo 1 danh sách gồm 24 phần tử không trùng lặp nhau từ file JSON cho trước",
    listData24
  );
  return (
    <div className="w-[375px] h-[812px] bg-slate-100">
      <div className=" pl-[15px] flex-col mt-12 ">
        <div className=" mt-[20px] ">
          <div className=" items-center mb-4  flex justify-start ">
            <IoIosArrowBack className=" text-[#04004D] h-[20px] w-[20px]" />
            <span className="text-[#04004D] font-semibold text-[16px]">
              Create New Wallet
            </span>
          </div>
          <span className=" text-[#004DFF] ">Auto Gen Seed Phrase?</span>
        </div>
        <Row>
          {listData24.length !== 0 &&
            listData24.map((post, index) => {
              return (
                <Col span={8} key={index}>
                  <div
                    className="flex justify-start items-center h-[32px] 
                  w-[101px]  mt-[19px] rounded bg-[#FFFFFF] shadow-md  "
                  >
                    <div
                      className=" w-[20px] h-[20px] bg-[#BBCFFB] 
                    flex justify-center items-center rounded-full ml-2 "
                    >
                      <span className=" text-[12px] text-[#004DFF] ">
                        {index}
                      </span>
                    </div>
                    <span className="ml-2 text-[#04004D] ">{post.name}</span>
                  </div>
                </Col>
              );
            })}
        </Row>
      </div>
      <div className="pb-[47px] pt-[30px] flex  items-center pl-[15px] ">
        <div className="w-[300px]">
          <span className=" text-[#04004D] font-normal ">
            Tap to Copy or Carefully write down your seed Phrase and store it in
            a safe place
          </span>
        </div>
        <div
          className=" w-[48px] h-[48px] border-[1px]
         border-[#004DFF] rounded-xl flex justify-evenly items-center "
        >
          <FaCopy className="w-[29px] h-[32px] text-[#004DFF]" />
        </div>
      </div>
      <div className=" bg-white h-[170px] flex flex-col justify-center ">
        <div className=" flex justify-between items-center ">
          <span className=" mt-2 font-semibold text-[#04004D] ml-[18px] ">
            How does this work?
          </span>
          <FiChevronRight className="mr-8" />
        </div>
        <div
          className=" mt-6  ml-[18px] bg-[#004DFF] w-[335px]
         h-[56px] rounded-md flex justify-center items-center"
        >
          <span className="font-semibold text-white">Next</span>
        </div>
      </div>
    </div>
  );
}
export default AutoGenSeenPhrase;
