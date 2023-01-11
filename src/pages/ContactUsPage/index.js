import React from "react";

import { Stack, Img, Text, Input, TextArea, Button } from "components";
import { useNavigate } from "react-router-dom";

const ContactUsPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate29() {
    navigate("/calculatorpage");
  }
  function handleNavigate34() {
    navigate("/");
  }
  function handleNavigate35() {
    navigate("/aboutuspage");
  }
  function handleNavigate36() {
    navigate("/aboutuspage");
  }
  function handleNavigate37() {
    navigate("/propertiespage");
  }
  function handleNavigate80() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-overpass items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pt-[15px] pt-[19px] md:pt-[9px] sm:px-[15px] px-[19px] md:px-[9px] shadow-bs w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1817px] md:ml-[22px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                <Stack className="h-[71px] mb-[12px] sm:mb-[4px] md:mb-[6px] relative w-[21%]">
                  <Img
                    src="images/img_volume.svg"
                    className="absolute h-[71px] left-[0] max-w-[100%] sm:w-[100%] w-[51%]"
                    alt="volume"
                  />
                  <Img
                    src="images/img_bookmark.svg"
                    className="absolute h-[71px] max-w-[100%] right-[0] sm:w-[100%] w-[51%]"
                    alt="bookmark"
                  />
                </Stack>
                <Text
                  className="ml-[18px] sm:ml-[7px] md:ml-[9px] sm:mt-[11px] md:mt-[15px] mt-[30px] text-indigo_400 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  RentEase{" "}
                </Text>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato md:ml-[162px] ml-[314px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%] common-row-list">
                <ul className="flex flex-row items-center justify-center">
                  <li className="w-[8%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:my-[22px] flex-col flex my-[43px]">
                    <div className="flex flex-col items-center justify-start">
                      <a
                        href={"javascript:"}
                        className="common-pointer cursor-pointer font-normal not-italic text-black_901 hover:text-indigo_600 w-[auto]"
                        variant="body8"
                        onClick={handleNavigate34}
                        rel="noreferrer"
                      >
                        Home
                      </a>
                    </div>
                  </li>
                  <li className="w-[15%] ml-[63px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[32px] flex-col flex">
                    <div
                      className="common-pointer flex flex-col items-center justify-start p-[12px] sm:p-[4px] md:p-[6px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0]"
                      onClick={handleNavigate35}
                    >
                      <a
                        href={"javascript:"}
                        className="common-pointer cursor-pointer font-normal sm:my-[12px] md:my-[16px] my-[31px] not-italic text-black_901 hover:text-indigo_600 w-[auto]"
                        variant="body8"
                        onClick={handleNavigate36}
                        rel="noreferrer"
                      >
                        About Us
                      </a>
                    </div>
                  </li>
                  <li className="w-[auto] ml-[68px] sm:ml-[27px] sm:w-[100%] sm:my-[10px] md:ml-[35px] md:my-[22px] my-[43px]">
                    <a
                      href={"javascript:"}
                      className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901 hover:text-indigo_600"
                      onClick={handleNavigate37}
                      rel="noreferrer"
                    >
                      Properties
                    </a>
                  </li>
                  <li className="w-[auto] ml-[67px] sm:ml-[26px] sm:w-[100%] sm:my-[10px] md:ml-[34px] md:my-[22px] my-[43px]">
                    <a
                      href={"javascript:"}
                      className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901 hover:text-indigo_600"
                      onClick={handleNavigate29}
                      rel="noreferrer"
                    >
                      Calculator
                    </a>
                  </li>
                  <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic text-[16px] text-indigo_600"
                      rel="noreferrer"
                    >
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
              <Stack className="border-bw15 border-solid border-white_A700 h-[55px] md:ml-[110px] ml-[215px] sm:ml-[85px] p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] relative rounded-radius15 w-[21%]">
                <Img
                  src="images/img_menu_22X31.svg"
                  className="absolute h-[22px] inset-y-[0] max-w-[100%] my-[auto] right-[8%] w-[9%]"
                  alt="menu"
                />
              </Stack>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-[100%]">
          <Img
            src="images/img_image2.png"
            className="max-w-[1914px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            alt="imageFour"
          />
          <div className="bg-white_A700 border border-black_900 border-solid flex flex-col items-end justify-start max-w-[1080px] ml-[auto] mr-[auto] md:mt-[129px] mt-[250px] sm:mt-[99px] sm:mx-[0] pl-[136px] sm:pl-[15px] md:pl-[70px] sm:pr-[15px] rounded-radius40 w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end sm:px-[0] w-[100%]">
              <div className="flex flex-col justify-start mt-[175px] sm:mt-[69px] md:mt-[90px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                <Text
                  className="font-normal sm:ml-[29px] md:ml-[37px] ml-[73px] not-italic text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Contact Us
                </Text>
                <div className="flex flex-col items-center justify-start sm:mt-[23px] md:mt-[30px] mt-[60px] w-[100%]">
                  <Input
                    className="font-lato font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                    wrapClassName="w-[100%]"
                    type="text"
                    name="Frame171"
                    placeholder="Full Name"
                  ></Input>
                  <Input
                    className="font-lato font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                    wrapClassName="md:mt-[24px] mt-[47px] sm:mt-[18px] w-[100%]"
                    type="email"
                    name="Frame173"
                    placeholder="Email"
                  ></Input>
                  <TextArea
                    className="font-lato font-normal sm:mt-[18px] md:mt-[24px] mt-[47px] not-italic text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                    name="Frame175"
                    placeholder="Your message"
                  ></TextArea>
                  <Button
                    className="cursor-pointer font-overpass font-semibold min-w-[50%] sm:mt-[18px] md:mt-[24px] mt-[47px] text-[16px] text-center text-indigo_900 w-[max-content]"
                    shape="RoundedBorder4"
                  >
                    Submit
                  </Button>
                </div>
              </div>
              <Img
                src="images/img_rectangle1171.png"
                className="max-w-[100%] ml-[109px] sm:ml-[43px] md:ml-[56px] w-[39%]"
                alt="Rectangle1171"
              />
            </div>
          </div>
          <footer className="bg-bluegray_100_7f sm:mt-[128px] md:mt-[165px] mt-[321px] w-[100%]">
            <div className="flex flex-col justify-start max-w-[1804px] sm:mb-[19px] md:mb-[25px] mb-[49px] md:ml-[45px] ml-[auto] md:mr-[13px] mr-[auto] sm:mt-[15px] md:mt-[20px] mt-[40px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                <Text
                  className="font-medium sm:mt-[13px] md:mt-[18px] mt-[35px] text-black_901 w-[auto]"
                  variant="body7"
                >
                  <span className="text-black_901 text-[18px] font-overpass font-semibold">
                    Phone:
                  </span>
                  <span className="text-black_901 text-[18px] font-overpass">
                    {" "}
                  </span>
                  <span className="text-black_901 text-[18px] font-overpass font-normal not-italic">
                    +234 647 8756 9<br />
                  </span>
                </Text>
                <Text
                  className="font-medium sm:ml-[215px] md:ml-[278px] ml-[539px] sm:mt-[15px] md:mt-[20px] mt-[40px] text-black_901 w-[auto]"
                  variant="body7"
                >
                  <span className="text-black_901 text-[18px] font-overpass font-semibold">
                    Email:
                  </span>
                  <span className="text-black_901 text-[18px] font-overpass font-normal not-italic">
                    {" "}
                    hello@rentease.com
                  </span>
                </Text>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[141px] ml-[275px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                  <Stack className="h-[71px] mb-[12px] sm:mb-[4px] md:mb-[6px] relative w-[21%]">
                    <Img
                      src="images/img_volume.svg"
                      className="absolute h-[71px] left-[0] max-w-[100%] sm:w-[100%] w-[51%]"
                      alt="volume One"
                    />
                    <Img
                      src="images/img_bookmark.svg"
                      className="absolute h-[71px] max-w-[100%] right-[0] sm:w-[100%] w-[51%]"
                      alt="bookmark One"
                    />
                  </Stack>
                  <Text
                    className="ml-[18px] sm:ml-[7px] md:ml-[9px] sm:mt-[11px] md:mt-[15px] mt-[30px] text-indigo_400 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    RentEase{" "}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[15px] md:mt-[19px] mt-[38px] w-[100%]">
                <Text
                  className="font-medium leading-[normal] sm:mt-[14px] md:mt-[18px] mt-[36px] sm:mx-[0] text-black_901 sm:w-[100%] w-[22%]"
                  variant="body7"
                >
                  <span className="text-black_901 text-[18px] font-overpass font-semibold">
                    Address:
                  </span>
                  <span className="text-black_901 text-[18px] font-overpass font-normal not-italic">
                    {" "}
                    734 Broadway, Floor 5, Spring Towers, Victoria Island, Lagos
                  </span>
                </Text>
                <div className="flex flex-col items-center justify-start md:ml-[179px] ml-[347px] sm:mt-[14px] md:mt-[18px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[5%]">
                  <Text
                    className="font-semibold text-black_901 w-[auto]"
                    variant="body7"
                  >
                    Follow Us
                  </Text>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[23px] sm:mt-[9px] w-[100%]">
                    <Img
                      src="images/img_plus.svg"
                      className="sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
                      alt="plus"
                    />
                    <Img
                      src="images/img_camera.svg"
                      className="sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
                      alt="camera"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_twitter.svg"
                  className="common-pointer sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[16px] sm:ml-[6px] md:ml-[8px] sm:mt-[31px] md:mt-[40px] mt-[78px] sm:w-[12px] md:w-[16px] w-[32px]"
                  onClick={handleNavigate80}
                  alt="twitter"
                />
                <Img
                  src="images/img_volume_32X32.svg"
                  className="sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[17px] sm:ml-[6px] md:ml-[8px] sm:mt-[31px] md:mt-[40px] mt-[78px] sm:w-[12px] md:w-[16px] w-[32px]"
                  alt="volume Two"
                />
                <Text
                  className="font-normal leading-[normal] md:ml-[157px] ml-[306px] sm:mx-[0] not-italic text-black_901 sm:w-[100%] w-[33%]"
                  variant="body7"
                >
                  {`We aim to be the preferred real estate firm for renters and landllords by providing great customer service and developing lifetime friendships one house at a time.  You can be rest assured that we will help you in selecting a payment plan as per your specific requirements and help you maximize your money's potential to the fullest.`}
                  <br />
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ContactUsPagePage;
