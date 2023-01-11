import React from "react";

import { Stack, Img, Text, Button, Line, Input } from "components";
import { useNavigate } from "react-router-dom";

const ProfilePagePage = () => {
  const navigate = useNavigate();

  function handleNavigate75() {
    navigate("/loginpage");
  }
  function handleNavigate79() {
    navigate("/calculatorpage");
  }
  function handleNavigate86() {
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
                <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato md:ml-[162px] ml-[314px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%] common-row-list">
                  <ul className="flex flex-row items-center justify-center">
                    <li className="w-[8%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:my-[22px] flex-col flex my-[43px]">
                      <div className="flex flex-col items-center justify-start">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-black_901 w-[auto]"
                          variant="body8"
                          rel="noreferrer"
                        >
                          Home
                        </a>
                      </div>
                    </li>
                    <li className="w-[16%] ml-[63px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[32px] flex-col flex">
                      <div className="flex flex-col items-center justify-start p-[12px] sm:p-[4px] md:p-[6px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal sm:my-[12px] md:my-[16px] my-[31px] not-italic text-black_901 w-[auto]"
                          variant="body8"
                          rel="noreferrer"
                        >
                          About Us
                        </a>
                      </div>
                    </li>
                    <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-black_901"
                        rel="noreferrer"
                      >
                        Property
                      </a>
                    </li>
                    <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                      <a
                        href={"javascript:"}
                        className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901"
                        onClick={handleNavigate79}
                        rel="noreferrer"
                      >
                        Calculator
                      </a>
                    </li>
                    <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-black_901"
                        rel="noreferrer"
                      >
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
                <Stack className="border-bw15 border-solid border-white_A700 h-[55px] ml-[182px] sm:ml-[72px] md:ml-[93px] p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] relative rounded-radius15 w-[22%]">
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
              className="max-w-[100%] w-[100%]"
              alt="imageThree"
            />
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[1400px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] w-[100%]">
              <Button
                className="cursor-pointer font-normal min-w-[50%] not-italic text-[16px] text-center text-indigo_400 w-[max-content]"
                size="md"
                variant="OutlineIndigo400_1"
              >
                Account
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[50%] not-italic text-[16px] text-center text-gray_900 w-[max-content]"
                size="md"
                variant="OutlineGray500"
              >
                Settings
              </Button>
            </div>
            <Text
              className="font-medium mt-[184px] sm:mt-[73px] md:mt-[94px] text-bluegray_700 w-[auto]"
              variant="body8"
            >
              Your Profile Picture
            </Text>
            <div className="bg-gray_51 border border-bluegray_700 border-dashed flex flex-col font-manrope items-center justify-start max-w-[202px] ml-[auto] mr-[auto] sm:mt-[18px] md:mt-[24px] mt-[47px] sm:mx-[0] sm:p-[15px] md:p-[20px] p-[40px] sm:pl-[15px] sm:pr-[15px] rounded-radius18 w-[100%]">
              <div className="flex flex-col items-center justify-start sm:mb-[13px] md:mb-[17px] mb-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                <Img
                  src="images/img_upload.svg"
                  className="max-w-[100%] sm:w-[100%] w-[55%]"
                  alt="upload"
                />
                <Text
                  className="font-medium sm:mt-[11px] md:mt-[14px] mt-[28px] text-bluegray_700 w-[auto]"
                  variant="body10"
                >
                  Upload your photo
                </Text>
              </div>
            </div>
            <Line className="bg-gray_303 h-[2px] max-w-[1396px] ml-[auto] mr-[auto] sm:mt-[21px] md:mt-[28px] mt-[55px] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center justify-center max-w-[1400px] ml-[auto] mr-[auto] sm:mt-[20px] md:mt-[26px] mt-[51px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Text
                      className="font-medium ml-[1px] text-bluegray_700 w-[auto]"
                      variant="body8"
                    >
                      Full name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                      wrapClassName="md:mt-[4px] mt-[8px] sm:mt-[3px] w-[100%]"
                      type="text"
                      name="Frame171"
                      placeholder="First Name"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <Text
                    className="font-medium text-bluegray_700 w-[auto]"
                    variant="body8"
                  >
                    Username
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                    wrapClassName="md:mt-[4px] mt-[9px] sm:mt-[3px] w-[100%]"
                    type="text"
                    name="Frame172"
                    placeholder="Username"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col items-center md:ml-[126px] ml-[246px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-medium ml-[1px] text-bluegray_700 w-[auto]"
                    variant="body8"
                  >
                    Email
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                    wrapClassName="md:mt-[4px] mt-[8px] sm:mt-[3px] w-[100%]"
                    type="email"
                    name="Frame171 One"
                    placeholder="Email"
                  ></Input>
                </div>
                <div className="flex flex-col justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] w-[100%]">
                  <Text
                    className="font-medium ml-[1px] text-bluegray_700 w-[auto]"
                    variant="body8"
                  >
                    Phone Number
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                    wrapClassName="md:mt-[4px] mt-[8px] sm:mt-[3px] w-[100%]"
                    type="number"
                    name="Frame174"
                    placeholder="Number"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-overpass items-start max-w-[1052px] ml-[auto] mr-[auto] sm:mt-[23px] md:mt-[30px] mt-[59px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-medium sm:mb-[2px] md:mb-[3px] mb-[7px] text-black_900 w-[auto]"
                variant="body1"
              >
                Change Password
              </Text>
              <Text
                className="font-medium sm:ml-[231px] md:ml-[298px] ml-[579px] sm:mt-[2px] md:mt-[3px] mt-[7px] text-black_900 w-[auto]"
                variant="body1"
              >
                Billing Address
              </Text>
            </div>
            <div className="flex flex-col font-lato justify-start max-w-[564px] ml-[auto] mr-[auto] mt-[3px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-medium text-bluegray_700 w-[auto]"
                variant="body8"
              >
                Card FullName{" "}
              </Text>
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                wrapClassName="md:mt-[3px] mt-[6px] sm:mt-[2px] w-[100%]"
                type="text"
                name="Frame173"
                placeholder="Card name"
              ></Input>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center max-w-[1400px] ml-[auto] mr-[auto] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                <Text
                  className="font-medium ml-[1px] text-bluegray_700 w-[auto]"
                  variant="body8"
                >
                  New password{" "}
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                  wrapClassName="md:mt-[4px] mt-[8px] sm:mt-[3px] w-[100%]"
                  type="password"
                  name="Frame175"
                  placeholder="New password"
                ></Input>
              </div>
              <Stack className="h-[81px] sm:ml-[107px] md:ml-[138px] ml-[269px] relative w-[24%]">
                <div className="absolute flex flex-col justify-start left-[1%] pb-[1px] sm:px-[0] px-[1px] w-[100%]">
                  <Text
                    className="font-medium sm:mb-[24px] md:mb-[32px] mb-[62px] text-bluegray_700 w-[auto]"
                    variant="body8"
                  >
                    Card Number
                  </Text>
                </div>
                <Input
                  className="absolute bottom-[0] font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                  wrapClassName="absolute w-[100%]"
                  type="number"
                  name="Frame171 Two"
                  placeholder="Card number"
                ></Input>
              </Stack>
              <div className="flex flex-col md:ml-[16px] ml-[32px] sm:mx-[0] pb-[1px] sm:px-[0] px-[1px] sm:w-[100%] w-[15%]">
                <Text
                  className="font-medium sm:mb-[24px] md:mb-[32px] mb-[62px] text-bluegray_700 w-[auto]"
                  variant="body8"
                >
                  CVV
                </Text>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center max-w-[1076px] ml-[auto] mr-[auto] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                <Text
                  className="font-medium ml-[1px] text-bluegray_700 w-[auto]"
                  variant="body8"
                >
                  New password again
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                  wrapClassName="md:mt-[4px] mt-[8px] sm:mt-[3px] w-[100%]"
                  type="password"
                  name="Frame173 One"
                  placeholder="New password again"
                ></Input>
              </div>
              <Stack className="h-[81px] sm:ml-[107px] md:ml-[139px] ml-[270px] relative w-[23%]">
                <div className="absolute flex flex-col justify-start left-[0] sm:mx-[0] pb-[1px] sm:px-[0] px-[1px] sm:w-[100%] w-[86%]">
                  <Text
                    className="font-medium sm:mb-[24px] md:mb-[32px] mb-[62px] text-bluegray_700 w-[auto]"
                    variant="body8"
                  >
                    MM/YY
                  </Text>
                </div>
                <Input
                  className="absolute bottom-[0] font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                  wrapClassName="absolute w-[100%]"
                  name="Frame173 Two"
                  placeholder="MM/YY"
                ></Input>
              </Stack>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-overpass items-start justify-center max-w-[1402px] ml-[auto] mr-[auto] sm:mt-[23px] md:mt-[30px] mt-[60px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                <div className="flex flex-col font-overpass justify-start w-[100%]">
                  <Text
                    className="font-medium text-black_902 w-[auto]"
                    variant="body1"
                  >
                    Billing History
                  </Text>
                  <div className="flex flex-col font-lato justify-start sm:mt-[2px] md:mt-[3px] mt-[7px] sm:px-[0] w-[100%]">
                    <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                      <Line className="bg-black_902 h-[1.5px] w-[100%]" />
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[19px] md:mt-[25px] mt-[49px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                        <div className="flex flex-col justify-start sm:mx-[0] pb-[15px] sm:pb-[5px] md:pb-[7px] pr-[15px] md:pr-[7px] sm:px-[0] sm:w-[100%] w-[28%]">
                          <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                            <Text
                              className="font-medium text-indigo_900 w-[auto]"
                              variant="body8"
                            >
                              Dec 1, 2020
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[40px] mt-[78px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                            <Text
                              className="font-medium text-indigo_900 w-[auto]"
                              variant="body8"
                            >
                              Jan 1, 2021
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[40px] mt-[78px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                            <Text
                              className="font-medium text-indigo_900 w-[auto]"
                              variant="body8"
                            >
                              Feb 1, 2021
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-[167px] md:ml-[86px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[6%]">
                          <Text
                            className="font-medium text-black_902 w-[auto]"
                            variant="body8"
                          >
                            N10
                          </Text>
                          <Text
                            className="font-medium sm:mt-[31px] md:mt-[40px] mt-[79px] text-black_902 w-[auto]"
                            variant="body8"
                          >
                            N10
                          </Text>
                          <Text
                            className="font-medium sm:mt-[31px] md:mt-[40px] mt-[79px] text-black_902 w-[auto]"
                            variant="body8"
                          >
                            N10
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-[146px] md:ml-[75px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                          <Text
                            className="font-normal not-italic text-black_902 w-[auto]"
                            variant="body8"
                          >
                            Period 1
                          </Text>
                          <Text
                            className="font-medium sm:mt-[31px] md:mt-[40px] mt-[79px] text-black_902 w-[auto]"
                            variant="body8"
                          >
                            Period 2
                          </Text>
                          <Text
                            className="font-medium sm:mt-[31px] md:mt-[40px] mt-[79px] text-black_902 w-[auto]"
                            variant="body8"
                          >
                            Period 3
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={"javascript:"}
                  className="font-lato font-medium sm:ml-[195px] md:ml-[252px] ml-[489px] text-[16px] text-indigo_600 underline w-[auto]"
                  rel="noreferrer"
                >
                  See more...
                </a>
              </div>
              <div className="flex flex-col justify-start ml-[152px] md:ml-[78px] mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                <Text
                  className="font-medium ml-[1px] text-black_900 w-[auto]"
                  variant="body1"
                >
                  Payment Plan
                </Text>
                <Line className="bg-black_902 h-[1.5px] mt-[3px] w-[100%]" />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center ml-[1px] sm:mt-[17px] md:mt-[23px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                  <Text
                    className="font-normal mb-[1px] not-italic text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Payment Option:
                  </Text>
                  <Text
                    className="font-light sm:ml-[36px] md:ml-[47px] ml-[92px] text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Monthly
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start ml-[1px] sm:mt-[13px] md:mt-[17px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                  <Text
                    className="font-normal not-italic text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Payment medium:
                  </Text>
                  <Text
                    className="font-light sm:ml-[32px] md:ml-[41px] ml-[81px] text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Bank Transfer
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start ml-[1px] sm:mt-[11px] md:mt-[15px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                  <Text
                    className="font-normal not-italic text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Amount:
                  </Text>
                  <Text
                    className="font-light ml-[180px] sm:ml-[71px] md:ml-[92px] text-black_900 w-[auto]"
                    variant="body4"
                  >
                    N38,333.28
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                  <Text
                    className="font-normal not-italic text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Card / Thirdparty details:
                  </Text>
                  <Text
                    className="font-light sm:ml-[3px] md:ml-[4px] ml-[9px] text-black_900 w-[auto]"
                    variant="body4"
                  >
                    None
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="font-medium mt-[119px] sm:mt-[47px] md:mt-[61px] text-black_900 w-[auto]"
              variant="body1"
            >
              Billing Plan
            </Text>
            <div className="flex flex-col font-lato justify-start max-w-[1199px] ml-[auto] mr-[auto] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-black_902 uppercase w-[auto]"
                  variant="body8"
                >
                  Current plan
                </Text>
                <Line className="bg-black_902 h-[1.5px] mt-[19px] sm:mt-[7px] md:mt-[9px] w-[100%]" />
              </div>
              <div className="flex flex-col justify-start md:mt-[12px] mt-[25px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                <Text
                  className="font-black text-black_902 w-[auto]"
                  variant="body5"
                >
                  Monthly Payment Package
                </Text>
                <Stack className="h-[27px] mt-[14px] sm:mt-[5px] md:mt-[7px] relative sm:w-[100%] w-[50%]">
                  <Text
                    className="absolute font-normal not-italic text-black_902 w-[auto]"
                    variant="body6"
                  >
                    N34,000 per month
                  </Text>
                  <Text
                    className="absolute font-normal not-italic text-black_902 w-[auto]"
                    variant="body6"
                  >
                    N34,000 per month
                  </Text>
                </Stack>
                <Text
                  className="mt-[15px] sm:mt-[5px] md:mt-[7px] not-italic text-black_902 w-[auto]"
                  variant="body9"
                >
                  Your plan renews on October 1, 2021
                </Text>
                <Text
                  className="font-normal ml-[4px] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-black_902 w-[auto]"
                  variant="body6"
                >
                  <span className="text-black_902 text-[20px] font-lato font-light">
                    Want to pay next billing now,{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-indigo_400 text-[20px] font-lato font-medium underline"
                  >
                    Click Here
                  </a>
                </Text>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start justify-between max-w-[1400px] ml-[auto] mr-[auto] sm:mt-[39px] md:mt-[50px] mt-[98px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mb-[2px] md:mb-[3px] mb-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                <Button
                  className="cursor-pointer font-normal min-w-[27%] not-italic text-[16px] text-center text-white_A700 w-[max-content]"
                  shape="RoundedBorder4"
                  variant="FillIndigo400"
                >
                  Update
                </Button>
                <div className="flex flex-col font-manrope items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                  <Text
                    className="font-medium text-bluegray_700 w-[auto]"
                    variant="body7"
                  >
                    Reset
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap font-overpass items-start md:mt-[10px] mt-[21px] sm:mt-[8px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]"
                onClick={handleNavigate75}
              >
                <Img
                  src="images/img_rewind.svg"
                  className="flex-shrink-0 max-w-[100%] mt-[2px] w-[20%]"
                  alt="rewind"
                />
                <Text
                  className="flex-grow font-normal md:ml-[11px] ml-[23px] sm:ml-[9px] not-italic text-bluegray_700"
                  variant="body4"
                >
                  Log out
                </Text>
              </div>
            </div>
            <footer className="bg-bluegray_100_7f font-overpass sm:mt-[139px] md:mt-[180px] mt-[349px] w-[100%]">
              <div className="flex flex-col justify-start max-w-[1804px] sm:mb-[25px] md:mb-[33px] mb-[65px] md:ml-[48px] ml-[auto] md:mr-[10px] mr-[auto] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
                      734 Broadway, Floor 5, Spring Towers, Victoria Island,
                      Lagos
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
                    onClick={handleNavigate86}
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
      </div>
    </>
  );
};

export default ProfilePagePage;
