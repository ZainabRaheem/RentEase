import React from "react";

import { Stack, Img, Text, Line, SelectBox, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const PRentApartmentPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    navigate("/aboutuspage");
  }
  function handleNavigate6() {
    navigate("/propertiespage");
  }
  function handleNavigate7() {
    navigate("/calculatorpage");
  }
  function handleNavigate8() {
    navigate("/contactuspage");
  }
  function handleNavigate13() {
    navigate("/");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-start mx-[auto] sm:pb-[15px] md:pb-[279px] pb-[541px] w-[100%]">
        <div className="flex flex-col justify-start w-[100%]">
          <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap font-overpass items-center sm:pt-[15px] pt-[19px] md:pt-[9px] sm:px-[15px] px-[19px] md:px-[9px] shadow-bs w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1777px] md:ml-[22px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
              <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center justify-center md:ml-[162px] ml-[314px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                  <Text
                    className="common-pointer font-normal not-italic text-black_901 w-[auto]"
                    variant="body8"
                    onClick={handleNavigate13}
                  >
                    Home
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-col items-center md:ml-[32px] ml-[63px] sm:mx-[0] p-[12px] md:p-[6px] sm:px-[0] sm:py-[4px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0] sm:w-[100%] w-[16%]"
                  onClick={handleNavigate5}
                >
                  <Text
                    className="font-normal sm:my-[12px] md:my-[16px] my-[31px] not-italic text-black_901 w-[auto]"
                    variant="body8"
                  >
                    About Us
                  </Text>
                </div>
                <Text
                  className="common-pointer font-normal sm:ml-[25px] md:ml-[32px] ml-[63px] not-italic text-black_901 w-[auto]"
                  variant="body8"
                  onClick={handleNavigate6}
                >
                  Property
                </Text>
                <Text
                  className="common-pointer font-normal sm:ml-[25px] md:ml-[32px] ml-[63px] not-italic text-black_901 w-[auto]"
                  variant="body8"
                  onClick={handleNavigate7}
                >
                  Calculator
                </Text>
                <Text
                  className="common-pointer font-normal sm:ml-[25px] md:ml-[32px] ml-[63px] not-italic text-black_901 w-[auto]"
                  variant="body8"
                  onClick={handleNavigate8}
                >
                  Contacts
                </Text>
              </div>
              <Stack className="border-bw15 border-solid border-white_A700 h-[55px] md:ml-[100px] ml-[195px] sm:ml-[77px] p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] relative rounded-radius15 w-[21%]">
                <Img
                  src="images/img_menu_22X31.svg"
                  className="absolute h-[22px] inset-y-[0] max-w-[100%] my-[auto] right-[8%] w-[9%]"
                  alt="menu"
                />
              </Stack>
            </div>
          </div>
          <div className="sm:mt-[107px] md:mt-[138px] mt-[269px] overflow-x-auto w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between overflow-auto w-[100%]">
              <div className="flex flex-col items-center justify-start max-w-[259px] ml-[auto] mr-[auto] mt-[2px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Img
                  src="images/img_rectangle12.png"
                  className="max-w-[100%] rounded-radius20 w-[100%]"
                  alt="RectangleTwelve"
                />
                <Img
                  src="images/img_rectangle12_482X258.png"
                  className="max-w-[100%] sm:mt-[13px] md:mt-[17px] mt-[33px] rounded-radius20 w-[100%]"
                  alt="RectangleTwelve One"
                />
              </div>
              <div className="flex flex-col justify-start max-w-[1736px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] rounded-radius20 sm:w-[100%] w-[36%]">
                    <Img
                      src="images/img_rectangle9.png"
                      className="max-w-[100%] rounded-radius20 w-[100%]"
                      alt="RectangleNine"
                    />
                    <Img
                      src="images/img_rectangle11.png"
                      className="max-w-[100%] sm:mt-[12px] md:mt-[16px] mt-[32px] rounded-radius20 w-[100%]"
                      alt="RectangleEleven"
                    />
                  </div>
                  <Img
                    src="images/img_rectangle1172.png"
                    className="max-w-[100%] mt-[4px] rounded-radius20 w-[28%]"
                    alt="Rectangle1172"
                  />
                  <Img
                    src="images/img_rectangle1173.png"
                    className="max-w-[100%] mt-[4px] rounded-radius20 w-[16%]"
                    alt="Rectangle1173"
                  />
                  <Img
                    src="images/img_rectangle1174.png"
                    className="max-w-[100%] mt-[4px] rounded-radius20 w-[16%]"
                    alt="Rectangle1174"
                  />
                </div>
                <Img
                  src="images/img_slider.svg"
                  className="max-w-[100%] sm:ml-[230px] md:ml-[297px] ml-[576px] sm:mt-[30px] md:mt-[39px] mt-[76px] w-[11%]"
                  alt="Slider"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap font-overpass items-end justify-center max-w-[1404px] md:ml-[132px] ml-[auto] mr-[auto] md:mt-[11px] mt-[23px] sm:mt-[9px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
              <Text
                className="font-medium ml-[2px] text-black_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Casa Dinero
              </Text>
              <Stack className="font-lato h-[166px] mt-[17px] sm:mt-[6px] md:mt-[8px] relative sm:w-[100%] w-[97%]">
                <div className="absolute flex flex-col items-center justify-start left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                      <div className="flex flex-col font-lato items-center justify-start mb-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                        <Text
                          className="font-light text-black_900 w-[auto]"
                          variant="body4"
                        >
                          4.77
                        </Text>
                      </div>
                      <Text
                        className="font-light font-overpass ml-[103px] sm:ml-[41px] md:ml-[53px] mt-[3px] text-black_900 w-[auto]"
                        variant="body4"
                      >
                        6 reviews{" "}
                      </Text>
                      <Text
                        className="font-light font-overpass sm:ml-[29px] md:ml-[38px] ml-[74px] mt-[4px] text-black_900 w-[auto]"
                        variant="body4"
                      >
                        Ikoyi, Lagos
                      </Text>
                    </div>
                    <Text
                      className="font-light sm:mt-[17px] md:mt-[23px] mt-[45px] text-black_900 w-[auto]"
                      variant="body7"
                    >
                      Furnished, utilities fee included
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[23px] sm:mt-[9px] sm:mx-[0] not-italic text-[16px] text-indigo_400 underline sm:w-[100%] w-[68%]"
                      rel="noreferrer"
                    >
                      16, Emem Crescent, The Grand Estate
                      <br />
                      Victoria Island, Lagos
                    </a>
                  </div>
                </div>
                <Line className="absolute bg-black_900 bottom-[35%] h-[1px] inset-x-[0] w-[100%]" />
                <Text
                  className="absolute font-semibold left-[0] text-black_900 top-[30%] w-[auto]"
                  variant="body7"
                >
                  1 bedroom, 1 bathroom, 1 living area
                </Text>
              </Stack>
              <Img
                src="images/img_mapsiclemap_382X715.png"
                className="max-w-[100%] md:mt-[10px] mt-[21px] sm:mt-[8px] w-[100%]"
                alt="MapsicleMap"
              />
            </div>
            <div className="bg-gray_100 border border-black_900 border-solid flex flex-col items-center justify-end md:ml-[50px] ml-[97px] sm:mt-[34px] md:mt-[44px] mt-[86px] sm:mx-[0] md:p-[15px] sm:p-[15px] p-[30px] rounded-radius20 sm:w-[100%] w-[42%]">
              <div className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                <Text
                  className="font-normal sm:ml-[103px] md:ml-[134px] ml-[260px] not-italic text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  N400, 000
                </Text>
                <div className="flex flex-col font-lato justify-start sm:mt-[25px] md:mt-[33px] mt-[65px] w-[100%]">
                  <div className="flex flex-col items-center justify-start ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                    <Text
                      className="not-italic text-gray_601 w-[auto]"
                      variant="body9"
                    >
                      Number of Tenants
                    </Text>
                  </div>
                  <Stack className="font-overpass h-[230px] sm:mt-[3px] md:mt-[4px] mt-[9px] relative w-[100%]">
                    <div className="absolute bottom-[0] flex flex-col items-center justify-start w-[100%]">
                      <SelectBox
                        className="font-normal not-italic text-[20px] text-black_900 w-[100%]"
                        placeholderClassName="text-black_900"
                        name="PaymentMode"
                        placeholder="Select Option"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="w-[15px] mr-[20px] sm:mr-[7px] sm:w-[5px] md:mr-[10px] md:w-[7px] max-w-[100%]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <div className="flex flex-col items-center justify-start mt-[17px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <div className="flex flex-col font-lato items-center justify-start ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                            <Text
                              className="not-italic text-gray_601 w-[auto]"
                              variant="body9"
                            >
                              Length of Contract
                            </Text>
                          </div>
                          <SelectBox
                            className="font-normal font-overpass sm:mt-[3px] md:mt-[4px] mt-[9px] not-italic text-[20px] text-black_900 w-[100%]"
                            placeholderClassName="text-black_900"
                            name="Lengthofcontr"
                            placeholder="Select Option"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown.svg"
                                className="w-[15px] mr-[20px] sm:mr-[7px] sm:w-[5px] md:mr-[10px] md:w-[7px] max-w-[100%]"
                                alt="arrow_down"
                              />
                            }
                          ></SelectBox>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col items-center justify-start top-[0] w-[100%]">
                      <SelectBox
                        className="font-normal not-italic text-[20px] text-black_900 w-[100%]"
                        placeholderClassName="text-black_900"
                        name="Tenant"
                        placeholder="Select Option"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="w-[15px] mr-[20px] sm:mr-[7px] sm:w-[5px] md:mr-[10px] md:w-[7px] max-w-[100%]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <div className="flex flex-col font-lato justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] sm:pb-[22px] md:pb-[29px] pb-[57px] sm:pr-[15px] md:pr-[29px] pr-[57px] w-[100%]">
                        <Text
                          className="not-italic text-gray_601 w-[auto]"
                          variant="body9"
                        >
                          Payment Option
                        </Text>
                      </div>
                    </div>
                  </Stack>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[31px] ml-[61px] sm:mt-[28px] md:mt-[37px] mt-[72px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                    <Button
                      className="cursor-pointer font-normal font-overpass min-w-[44%] not-italic text-[16px] text-center text-indigo_900 w-[max-content]"
                      shape="RoundedBorder4"
                    >
                      Rent
                    </Button>
                    <Button
                      className="cursor-pointer font-lato font-normal min-w-[44%] sm:ml-[21px] md:ml-[27px] ml-[53px] not-italic text-[16px] text-center text-white_A700 w-[max-content]"
                      shape="RoundedBorder4"
                      variant="FillBluegray100"
                    >
                      Buy
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-black_900 h-[1px] max-w-[1401px] ml-[auto] mr-[auto] sm:mt-[11px] md:mt-[14px] mt-[29px] mx-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <List
            className="font-lato sm:gap-[194px] md:gap-[250px] gap-[486px] grid sm:grid-cols-1 grid-cols-2 max-w-[777px] min-h-[auto] sm:ml-[138px] md:ml-[179px] ml-[auto] mr-[auto] mt-[125px] sm:mt-[49px] md:mt-[64px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            orientation="horizontal"
          >
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
              <Img
                src="images/img_ellipse18.png"
                className="sm:h-[20px] md:h-[26px] h-[50px] rounded-radius50 sm:w-[19px] md:w-[25px] w-[50px]"
                alt="EllipseNineteen"
              />
              <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                <Text
                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                  variant="body6"
                >
                  Amira
                </Text>
                <Text
                  className="font-normal mt-[4px] not-italic text-indigo_400 w-[auto]"
                  variant="body8"
                >
                  Ikeja, Lagos
                </Text>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
              <Img
                src="images/img_ellipse18_50X50.png"
                className="sm:h-[20px] md:h-[26px] h-[50px] rounded-radius50 sm:w-[19px] md:w-[25px] w-[50px]"
                alt="EllipseEighteen"
              />
              <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                <Text
                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                  variant="body6"
                >
                  Chiamaka
                </Text>
                <Text
                  className="font-normal mt-[4px] not-italic text-indigo_400 w-[auto]"
                  variant="body8"
                >
                  Ajah, Lagos
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start max-w-[905px] md:ml-[179px] ml-[auto] mr-[auto] md:mt-[12px] mt-[25px] sm:mt-[9px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-normal leading-[normal] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[67%]"
              variant="body7"
            >
              I have rented from Mr. Tope for several years now and his
              properties are always incredible to stay in. Highly recommend!
            </Text>
            <Text
              className="font-normal md:ml-[11px] ml-[23px] sm:ml-[9px] not-italic text-black_900 w-[auto]"
              variant="body7"
            >
              Very responsive and helpful owner.
            </Text>
          </div>
          <List
            className="font-lato sm:gap-[167px] md:gap-[216px] gap-[419px] grid sm:grid-cols-1 grid-cols-2 max-w-[798px] min-h-[auto] sm:ml-[138px] md:ml-[179px] ml-[auto] mr-[auto] sm:mt-[33px] md:mt-[43px] mt-[85px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            orientation="horizontal"
          >
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
              <Img
                src="images/img_ellipse18_1.png"
                className="sm:h-[20px] md:h-[26px] h-[50px] rounded-radius50 sm:w-[19px] md:w-[25px] w-[50px]"
                alt="EllipseEighteen One"
              />
              <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                <Text
                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                  variant="body6"
                >
                  Yewande
                </Text>
                <Text
                  className="font-normal mt-[4px] not-italic text-indigo_400 w-[auto]"
                  variant="body8"
                >
                  Victoria Island, Lagos
                </Text>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
              <Img
                src="images/img_ellipse18_1.png"
                className="sm:h-[20px] md:h-[26px] h-[50px] rounded-radius50 sm:w-[19px] md:w-[25px] w-[50px]"
                alt="EllipseEighteen Two"
              />
              <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                <Text
                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                  variant="body6"
                >
                  Erica
                </Text>
                <Text
                  className="font-normal mt-[4px] not-italic text-indigo_400 w-[auto]"
                  variant="body8"
                >
                  Surulere, Lagos
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center justify-center max-w-[1226px] md:ml-[179px] ml-[auto] mr-[auto] md:mt-[12px] mt-[25px] sm:mt-[9px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-normal leading-[normal] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[47%]"
              variant="body7"
            >
              Property that is both unique and gorgeous. Kitchen is fully
              supplied. Simple instructions and effective communication.
            </Text>
            <Text
              className="font-normal leading-[normal] md:ml-[30px] ml-[59px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[49%]"
              variant="body7"
            >
              Totally superb! Extraordinary design and extensive, clean and
              perspectives on the sea and Dawn to kick the bucket for.
            </Text>
          </div>
          <a
            href={"javascript:"}
            className="font-lato font-normal ml-[1548px] sm:ml-[618px] md:ml-[798px] sm:mt-[12px] md:mt-[16px] mt-[32px] not-italic sm:text-[18px] md:text-[20px] text-[22px] text-indigo_900 underline w-[auto]"
            rel="noreferrer"
          >
            See More...
          </a>
          <Line className="bg-black_900 h-[1px] max-w-[1402px] sm:ml-[104px] md:ml-[134px] ml-[auto] sm:mr-[102px] md:mr-[132px] mr-[auto] sm:mt-[27px] md:mt-[35px] mt-[69px] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[907px] md:ml-[134px] ml-[auto] mr-[auto] sm:mt-[17px] md:mt-[23px] mt-[45px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Img
              src="images/img_ellipse19.png"
              className="sm:h-[34px] md:h-[44px] h-[85px] rounded-radius50 sm:w-[33px] md:w-[43px] w-[85px]"
              alt="EllipseNineteen One"
            />
            <div className="flex flex-col justify-start md:ml-[16px] ml-[32px] mt-[17px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
              <a
                href={"javascript:"}
                className="font-normal font-overpass not-italic sm:text-[38px] md:text-[44px] text-[48px] text-indigo_900 underline w-[auto]"
                rel="noreferrer"
              >
                Mr Tope Emanuel
              </a>
              <Text
                className="font-lato font-normal ml-[2px] mt-[2px] not-italic text-black_900 w-[auto]"
                variant="body7"
              >
                Property Owner
              </Text>
              <Text
                className="font-normal font-overpass ml-[2px] md:mt-[12px] mt-[25px] sm:mt-[9px] not-italic text-black_900 w-[auto]"
                variant="body4"
              >
                About{" "}
              </Text>
              <Text
                className="font-normal font-overpass leading-[normal] sm:mt-[2px] md:mt-[3px] mt-[7px] not-italic text-black_900 w-[100%]"
                variant="body7"
              >
                This is just a conceopt of what need write up not what should be
                there. He owns three properties in various parts of Lagos. He is
                hihgly ranked and well-liked by his tenants, with many of them
                stating that they had wonderful working relationships with him.
                In addition, he is a well-known philanthropist. He has sold 120
                pieces of art and one is on display at the Lagos Museum .
              </Text>
              <Text
                className="font-normal font-overpass leading-[normal] ml-[2px] sm:mt-[2px] md:mt-[3px] mt-[7px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[37%]"
                variant="body4"
              >
                Policy Number: C49333398u
                <br />
                <br />
                Status: Verified{" "}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PRentApartmentPagePage;
