import { IoIosArrowBack } from "react-icons/io";
import { FiChevronRight } from "react-icons/fi";
import { ListName } from "../assets/ListName";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";

// Bài 2

function ConfirmYourSeedPhrase() {
  let Object18 = [];
  const [listData6, setListData6] = useState([]);
  useEffect(() => {
    for (let i = 0; i <= 100; i++) {
      let Object = ListName[Math.floor(Math.random() * ListName.length)];
      if (Object18.includes(Object) === false && Object18.length < 18) {
        Object18.push(Object);
      }
    }
    const renderLastList = (data) => {
      const newData = data
        .map((i, index) => {
          return {
            name: i,
            index,
            temp: Math.floor(Math.random() * 100),
          };
        })
        .sort((d1, d2) => d2.temp - d1.temp)
        .map(({ temp, ...item }) => item)
        .slice(0, 18);
      let temp = 0;
      let lastList = [];
      for (let i = 0; i < 6; i++) {
        const node = {
          list: [
            newData[temp].name,
            newData[temp + 1].name,
            newData[temp + 2].name,
          ],
          primary: newData[temp + Math.floor(Math.random() * 2)].index + 1,
        };
        lastList.push(node);
        temp += 3;
      }
      setListData6(lastList);
    };
    renderLastList(Object18);
  }, []);

  console.log("Từ 18 phần tử vừa lấy được tạo thành 1 danh sách gồm 6 phần tử",listData6);

  return (
    <div className="w-[375px] h-[812px] bg-slate-100">
      <div className=" pl-[15px] flex-col mt-12 ">
        <div className=" mt-[20px] ">
          <div className=" items-center mb-4  flex ">
            <IoIosArrowBack className=" text-[#04004D] h-[20px] w-[20px]" />
            <span className="text-[#04004D] font-semibold text-[16px]">
              Create New Wallet
            </span>
          </div>
          <span className=" text-[#004DFF] ">Confirm Your Seed Phrase</span>
        </div>
        <Row>
          {listData6.length !== 0 &&
            listData6.map((post, index) => {
              return (
                <Col span={24} key={index}>
                  <div
                    className="flex justify-start items-center h-[32px] 
              w-[101px]  mt-[19px] rounded bg-[#FFFFFF] shadow-md "
                  >
                    <Row>
                      <Col span={3}>
                        <span className=" text-[12px] text-[#004DFF] ">
                          {post.primary}
                        </span>
                      </Col>
                       <Col span={21}>
                      {post.list.map((post, index) => {
                        return (
                          <span key={index} className="ml-2 text-[#04004D] ">
                            {post}
                          </span>
                        );
                      })}
                       </Col>
                    </Row>
                  </div>
                </Col>
              );
            })}
        </Row>
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
          <span className="  font-semibold text-white">SUBMIT</span>
        </div>
      </div>
    </div>
  );
}
export default ConfirmYourSeedPhrase;
