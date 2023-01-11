import React from "react";

import { Stack, Img, Text, Line } from "components";
import { useNavigate } from "react-router-dom";

const AboutUsPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate48() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate49() {
    navigate("/calculatorpage");
  }
  function handleNavigate50() {
    navigate("/contactuspage");
  }
  function handleNavigate56() {
    navigate("/");
  }
  function handleNavigate90() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-overpass items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pt-[15px] pt-[19px] md:pt-[9px] sm:px-[15px] px-[19px] md:px-[9px] shadow-bs w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1764px] md:ml-[22px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
                <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato md:ml-[162px] ml-[314px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%] common-row-list">
                  <ul className="flex flex-row items-center justify-center">
                    <li className="w-[8%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:my-[22px] flex-col flex my-[43px]">
                      <div className="flex flex-col items-center justify-start">
                        <a
                          href={"javascript:"}
                          className="common-pointer cursor-pointer font-normal not-italic text-black_901 hover:text-indigo_900 w-[auto]"
                          variant="body8"
                          onClick={handleNavigate56}
                          rel="noreferrer"
                        >
                          Home
                        </a>
                      </div>
                    </li>
                    <li className="w-[15%] ml-[63px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[32px] flex-col flex">
                      <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[4px] md:p-[6px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal sm:my-[12px] md:my-[16px] my-[31px] not-italic text-indigo_900 w-[auto]"
                          variant="body8"
                          rel="noreferrer"
                        >
                          About Us
                        </a>
                      </div>
                    </li>
                    <li className="w-[auto] ml-[68px] sm:ml-[27px] sm:w-[100%] sm:my-[10px] md:ml-[35px] md:my-[22px] my-[43px]">
                      <a
                        href={"javascript:"}
                        className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901 hover:text-indigo_900"
                        onClick={handleNavigate48}
                        rel="noreferrer"
                      >
                        Properties
                      </a>
                    </li>
                    <li className="w-[auto] ml-[67px] sm:ml-[26px] sm:w-[100%] sm:my-[10px] md:ml-[34px] md:my-[22px] my-[43px]">
                      <a
                        href={"javascript:"}
                        className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901 hover:text-indigo_900"
                        onClick={handleNavigate49}
                        rel="noreferrer"
                      >
                        Calculator
                      </a>
                    </li>
                    <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                      <a
                        href={"javascript:"}
                        className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901 hover:text-indigo_900"
                        onClick={handleNavigate50}
                        rel="noreferrer"
                      >
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
                <Stack className="border-bw15 border-solid border-white_A700 h-[55px] ml-[162px] sm:ml-[64px] md:ml-[83px] p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] relative rounded-radius15 w-[22%]">
                  <Img
                    src="images/img_menu_22X31.svg"
                    className="absolute h-[22px] inset-y-[0] max-w-[100%] my-[auto] right-[8%] w-[9%]"
                    alt="menu"
                  />
                </Stack>
              </div>
            </div>
          </header>
          <div className="flex flex-col justify-start w-[100%]">
            <Img
              src="images/img_rectangle1165.png"
              className="max-w-[100%] w-[100%]"
              alt="Rectangle1165"
            />
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end max-w-[1659px] ml-[auto] mr-[auto] mt-[108px] sm:mt-[43px] md:mt-[55px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                <Text
                  className="font-medium font-overpass text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  About Us
                </Text>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between ml-[2px] sm:mt-[29px] md:mt-[38px] mt-[74px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Text
                    className="font-bold font-overpass sm:mt-[1px] md:mt-[2px] mt-[5px] text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Our Mission
                  </Text>
                  <Line className="bg-black_900 sm:h-[151px] md:h-[195px] h-[376px] mt-[4px] w-[3px]" />
                  <Text
                    className="font-lato font-light leading-[normal] sm:mx-[0] text-black_900 sm:w-[100%] w-[74%]"
                    variant="body1"
                  >
                    To provide real estate services that satisfy both current
                    and prospective clients, so that everyone who interacts with
                    us is delighted and eager to enthusiastically recommend us
                    to their friends, family, and coworkers.
                    <br />
                    <br />
                    <br />
                    To provide our clients with exceptional service and returns
                    while being the best real estate agents in the industry.
                  </Text>
                </div>
                <Text
                  className="font-bold font-overpass sm:mt-[37px] md:mt-[49px] mt-[95px] text-black_900 w-[auto]"
                  variant="body4"
                >
                  Our Vision
                </Text>
                <Line className="bg-black_900 h-[3px] ml-[1px] md:mt-[10px] mt-[21px] sm:mt-[8px] sm:w-[100%] w-[59%]" />
                <Text
                  className="font-lato font-light leading-[normal] sm:mt-[3px] md:mt-[4px] mt-[8px] text-black_901 w-[100%]"
                  variant="body1"
                >
                  We aim to be the preferred real estate firm for buyers,
                  sellers, and renters by providing great customer service and
                  developing lifetime friendships one house at a time. You can
                  be rest assured that we will help you in selecting a payment
                  plan as per your specific requirements and help you maximize
                  your money's potential to the fullest.
                </Text>
              </div>
              <Img
                src="images/img_rectangle1166.png"
                className="max-w-[100%] ml-[174px] sm:ml-[69px] md:ml-[89px] mt-[169px] sm:mt-[67px] md:mt-[87px] rounded-radius20 sm:w-[100%] w-[43%]"
                alt="Rectangle1166"
              />
            </div>
            <Text
              className="font-light font-overpass sm:ml-[231px] md:ml-[298px] ml-[579px] mt-[106px] sm:mt-[42px] md:mt-[54px] text-black_900 w-[auto]"
              as="h5"
              variant="h5"
            >
              We are here to help you Find a home
            </Text>
            <Text
              className="font-lato font-light leading-[normal] md:ml-[190px] ml-[369px] sm:mt-[15px] md:mt-[20px] mt-[39px] sm:mx-[0] text-black_901 text-center sm:w-[100%] w-[61%]"
              variant="body1"
            >
              We Know you want to find a home, And you may be stressed about the
              financial obligation.{" "}
            </Text>
            <Text
              className="font-lato font-light leading-[normal] md:ml-[194px] ml-[377px] sm:mx-[0] text-black_901 text-center sm:w-[100%] w-[61%]"
              variant="body1"
            >
              That is why we are here to make things easier for you. Find a home
              as quick as possible and process the payment freely and quickly
              with any payment plan of your choice. We hope you find a place you
              can call home, contact us with any of your problems and we would
              reply as quick as possible.
            </Text>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start justify-center max-w-[1226px] md:ml-[179px] ml-[auto] mr-[auto] sm:mt-[24px] md:mt-[31px] mt-[61px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col items-center justify-start sm:mt-[25px] md:mt-[32px] mt-[63px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <div className="bg-indigo_400_99 flex flex-col items-center justify-end sm:mb-[12px] md:mb-[16px] mb-[31px] sm:mx-[0] sm:pt-[15px] md:pt-[19px] pt-[38px] sm:px-[15px] md:px-[19px] px-[38px] rounded-radius20 sm:w-[100%] w-[51%]">
                    <Text
                      className="font-normal leading-[normal] mt-[106px] sm:mt-[42px] md:mt-[54px] not-italic text-black_901 text-center w-[100%]"
                      variant="body6"
                    >
                      Onah Anthonia Obiageli
                    </Text>
                  </div>
                  <div className="bg-indigo_400_99 flex flex-col items-center justify-end sm:mx-[0] md:p-[10px] sm:p-[15px] p-[21px] rounded-radius20 sm:w-[100%] w-[44%]">
                    <Text
                      className="font-normal leading-[normal] mt-[137px] sm:mt-[54px] md:mt-[70px] sm:mx-[0] not-italic text-black_901 text-center sm:w-[100%] w-[85%]"
                      variant="body6"
                    >
                      Mariam Adesina
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mt-[4px] w-[100%]">
                  <div className="bg-indigo_400_99 flex flex-col items-center justify-end sm:mx-[0] p-[15px] sm:p-[5px] md:p-[7px] rounded-radius20 sm:w-[100%] w-[51%]">
                    <Text
                      className="font-normal mt-[150px] sm:mt-[59px] md:mt-[77px] not-italic text-black_901 w-[auto]"
                      variant="body6"
                    >
                      Helen Agu
                    </Text>
                  </div>
                  <div className="bg-indigo_400_99 flex flex-col items-center justify-end md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:pt-[15px] md:pt-[16px] pt-[31px] sm:px-[15px] md:px-[16px] px-[31px] rounded-radius20 sm:w-[100%] w-[44%]">
                    <Text
                      className="font-normal leading-[normal] sm:mt-[23px] md:mt-[30px] mt-[60px] not-italic text-black_901 text-center w-[100%]"
                      variant="body6"
                    >
                      Oyerinde Deborah Ayomide
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mb-[1px] md:ml-[16px] ml-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <div className="flex flex-col justify-start md:mb-[10px] mb-[21px] sm:mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                    <Text
                      className="font-normal md:ml-[12px] ml-[25px] sm:ml-[9px] not-italic text-black_901 w-[auto]"
                      variant="body1"
                    >
                      Our Team
                    </Text>
                    <div className="bg-indigo_400_99 flex flex-col items-center justify-end sm:mt-[10px] md:mt-[13px] mt-[27px] md:p-[10px] sm:p-[15px] p-[21px] rounded-radius20 w-[100%]">
                      <Text
                        className="font-normal md:mt-[104px] mt-[203px] sm:mt-[81px] not-italic text-black_901 w-[auto]"
                        variant="body6"
                      >
                        Joy Odunwa
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start sm:mt-[25px] md:mt-[32px] mt-[63px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                    <div className="bg-indigo_400_99 flex flex-col items-center justify-start md:pt-[15px] sm:pt-[15px] pt-[30px] md:px-[15px] sm:px-[15px] px-[30px] rounded-radius20 w-[100%]">
                      <Text
                        className="font-normal leading-[normal] sm:mt-[21px] md:mt-[28px] mt-[55px] not-italic text-black_901 text-center w-[100%]"
                        variant="body6"
                      >
                        Assyah Ibraheem
                      </Text>
                    </div>
                    <div className="bg-indigo_400_99 flex flex-col items-center justify-end mt-[18px] sm:mt-[7px] md:mt-[9px] sm:p-[2px] md:p-[3px] p-[6px] rounded-radius20 w-[100%]">
                      <Text
                        className="font-normal leading-[normal] sm:mt-[26px] md:mt-[34px] mt-[67px] sm:mx-[0] not-italic text-black_901 text-center sm:w-[100%] w-[74%]"
                        variant="body6"
                      >
                        Aasiya Abubakar
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mt-[4px] w-[100%]">
                  <div className="bg-indigo_400_99 flex flex-col items-center justify-end sm:mx-[0] md:p-[10px] sm:p-[15px] p-[20px] rounded-radius20 sm:w-[100%] w-[47%]">
                    <Text
                      className="font-normal sm:mt-[32px] md:mt-[41px] mt-[81px] not-italic text-black_901 w-[auto]"
                      variant="body6"
                    >
                      Nafisat Faruk
                    </Text>
                  </div>
                  <div className="bg-indigo_400_99 flex flex-col items-center justify-end mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] p-[13px] sm:p-[5px] md:p-[6px] rounded-radius20 sm:w-[100%] w-[47%]">
                    <Text
                      className="font-normal leading-[normal] sm:mt-[22px] md:mt-[29px] mt-[57px] sm:mx-[0] not-italic text-black_901 text-center sm:w-[100%] w-[63%]"
                      variant="body6"
                    >
                      Azeezah Ibraheem
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[16px] ml-[31px] sm:mt-[25px] md:mt-[32px] mt-[63px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                <div className="bg-indigo_400_99 flex flex-col items-center justify-end sm:p-[15px] p-[19px] md:p-[9px] rounded-radius20 w-[100%]">
                  <Text
                    className="font-normal mt-[143px] sm:mt-[57px] md:mt-[73px] not-italic text-black_901 w-[auto]"
                    variant="body6"
                  >
                    Leila Yesufu
                  </Text>
                </div>
                <div className="bg-indigo_400_99 flex flex-col items-center justify-end sm:mt-[11px] md:mt-[15px] mt-[30px] p-[1px] rounded-radius20 w-[100%]">
                  <Text
                    className="font-normal leading-[normal] mt-[146px] sm:mt-[58px] md:mt-[75px] sm:mx-[0] not-italic text-black_901 text-center sm:w-[100%] w-[71%]"
                    variant="body6"
                  >
                    Raheem Zainab Oluwafunke
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="font-light font-overpass leading-[normal] md:ml-[241px] ml-[468px] mt-[138px] sm:mt-[55px] md:mt-[71px] sm:mx-[0] text-black_900 text-center sm:w-[100%] w-[52%]"
              variant="body1"
            >
              “Finding you a home that will free you of any financial burden is
              our priority, There's a solution out there for everyone and we are
              here to provide that for you”
            </Text>
            <a
              href={"javascript:"}
              className="font-light font-overpass ml-[1296px] sm:ml-[517px] md:ml-[668px] sm:mt-[36px] md:mt-[46px] mt-[91px] sm:text-[28px] md:text-[30px] text-[32px] text-indigo_400 underline w-[auto]"
              rel="noreferrer"
            >
              {"See properties >>>"}
            </a>
            <footer className="bg-bluegray_100_7f font-overpass mt-[193px] sm:mt-[77px] md:mt-[99px] w-[100%]">
              <div className="flex flex-col justify-start max-w-[1804px] sm:mb-[19px] md:mb-[25px] mb-[49px] md:ml-[45px] ml-[auto] md:mr-[13px] mr-[auto] sm:mt-[15px] md:mt-[20px] mt-[40px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                  <div className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                      <Img
                        src="images/img_plus.svg"
                        className="max-w-[100%] w-[18%]"
                        alt="plus"
                      />
                      <Img
                        src="images/img_camera.svg"
                        className="max-w-[100%] ml-[17px] sm:ml-[6px] md:ml-[8px] w-[18%]"
                        alt="camera"
                      />
                      <Img
                        src="images/img_twitter.svg"
                        className="common-pointer max-w-[100%] ml-[16px] sm:ml-[6px] md:ml-[8px] w-[18%]"
                        onClick={handleNavigate90}
                        alt="twitter"
                      />
                      <Img
                        src="images/img_volume_30X32.svg"
                        className="max-w-[100%] ml-[17px] sm:ml-[6px] md:ml-[8px] w-[18%]"
                        alt="volume One"
                      />
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[1px] w-[100%]">
                      <Text
                        className="font-medium sm:mb-[1px] md:mb-[2px] mb-[5px] text-black_901 w-[auto]"
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
                        className="font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-black_901 w-[auto]"
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
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[141px] ml-[275px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                    <Stack className="h-[71px] mb-[12px] sm:mb-[4px] md:mb-[6px] relative w-[21%]">
                      <Img
                        src="images/img_volume.svg"
                        className="absolute h-[71px] left-[0] max-w-[100%] sm:w-[100%] w-[51%]"
                        alt="volume Two"
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
                      734 Broadway, Floor 5, Spring Towers, Victoria Island,
                      Lagos
                    </span>
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[138px] md:ml-[179px] ml-[347px] sm:mt-[14px] md:mt-[18px] mt-[36px] text-black_901 w-[auto]"
                    variant="body7"
                  >
                    Follow Us
                  </Text>
                  <Text
                    className="font-normal leading-[normal] md:ml-[209px] ml-[406px] sm:mx-[0] not-italic text-black_901 sm:w-[100%] w-[33%]"
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
      </div>
    </>
  );
};

export default AboutUsPagePage;
