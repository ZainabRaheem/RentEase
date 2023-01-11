import React from "react";

import { Stack, Img, Text, Input, SelectBox, Grid } from "components";
import { useNavigate } from "react-router-dom";

const PropertiesPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate57() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate61() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate62() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate63() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate64() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate65() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate66() {
    navigate("/contactuspage");
  }
  function handleNavigate67() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate68() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate69() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate72() {
    navigate("/");
  }
  function handleNavigate73() {
    navigate("/aboutuspage");
  }
  function handleNavigate74() {
    navigate("/calculatorpage");
  }
  function handleNavigate88() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-lato items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div
            className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:pb-[15px] md:pb-[33px] pb-[64px] w-[100%]"
            style={{ backgroundImage: "url('images/img_image2.png')" }}
          >
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <header className="w-[100%]">
                  <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pt-[15px] pt-[19px] md:pt-[9px] sm:px-[15px] px-[19px] md:px-[9px] shadow-bs w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1823px] md:ml-[22px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap font-overpass items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
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
                      <div className="flex flex-col font-lato items-center md:ml-[162px] ml-[314px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[3%]">
                        <Text
                          className="common-pointer font-normal not-italic text-black_901 w-[auto]"
                          variant="body8"
                          onClick={handleNavigate72}
                        >
                          Home
                        </Text>
                      </div>
                      <div
                        className="common-pointer flex flex-col font-lato items-center md:ml-[32px] ml-[63px] sm:mx-[0] p-[12px] md:p-[6px] sm:px-[0] sm:py-[4px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0] sm:w-[100%] w-[5%]"
                        onClick={handleNavigate73}
                      >
                        <Text
                          className="font-normal sm:my-[12px] md:my-[16px] my-[31px] not-italic text-black_901 w-[auto]"
                          variant="body8"
                        >
                          About Us
                        </Text>
                      </div>
                      <Text
                        className="font-lato font-normal sm:ml-[25px] md:ml-[32px] ml-[63px] not-italic text-indigo_400 w-[auto]"
                        variant="body8"
                      >
                        Properties
                      </Text>
                      <Text
                        className="common-pointer font-lato font-normal sm:ml-[17px] md:ml-[22px] ml-[43px] not-italic text-black_901 w-[auto]"
                        variant="body8"
                        onClick={handleNavigate74}
                      >
                        Calculator
                      </Text>
                      <Text
                        className="common-pointer font-lato font-normal sm:ml-[17px] md:ml-[22px] ml-[43px] not-italic text-black_901 w-[auto]"
                        variant="body8"
                        onClick={handleNavigate66}
                      >
                        Contacts
                      </Text>
                      <Stack className="border-bw15 border-solid border-white_A700 h-[55px] sm:ml-[107px] md:ml-[139px] ml-[270px] p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] relative rounded-radius15 w-[21%]">
                        <Img
                          src="images/img_menu_22X31.svg"
                          className="absolute h-[22px] inset-y-[0] max-w-[100%] my-[auto] right-[8%] w-[9%]"
                          alt="menu"
                        />
                      </Stack>
                    </div>
                  </div>
                </header>
                <div className="flex flex-col justify-start max-w-[1386px] ml-[auto] mr-[auto] md:mt-[128px] mt-[248px] sm:mt-[99px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                    <Text
                      className="font-bold sm:mt-[2px] md:mt-[3px] mt-[6px] text-black_901 w-[auto]"
                      variant="body8"
                    >
                      Search
                    </Text>
                    <Text
                      className="font-bold sm:mb-[2px] md:mb-[3px] mb-[6px] sm:ml-[129px] md:ml-[167px] ml-[325px] text-black_901 w-[auto]"
                      variant="body8"
                    >
                      Price range
                    </Text>
                    <Text
                      className="font-bold sm:mb-[2px] md:mb-[3px] mb-[6px] ml-[178px] sm:ml-[71px] md:ml-[91px] text-black_901 w-[auto]"
                      variant="body8"
                    >
                      Property Type
                    </Text>
                    <Text
                      className="font-bold sm:mb-[2px] md:mb-[3px] mb-[6px] md:ml-[109px] ml-[212px] sm:ml-[84px] text-black_901 w-[auto]"
                      variant="body8"
                    >
                      Number of Bedrooms
                    </Text>
                    <Text
                      className="font-bold sm:mb-[2px] md:mb-[3px] mb-[6px] ml-[115px] sm:ml-[45px] md:ml-[59px] text-black_901 w-[auto]"
                      variant="body8"
                    >
                      More
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap font-overpass items-center justify-between mt-[17px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                    <Input
                      className="font-normal not-italic p-[0] text-[20px] placeholder:text-black_900 text-black_900 w-[100%]"
                      wrapClassName="sm:mx-[0] sm:w-[100%] w-[23%]"
                      name="Frame170"
                      placeholder="eg. Lekki"
                      shape="RoundedBorder10"
                      variant="OutlineGray300"
                    ></Input>
                    <SelectBox
                      className="font-normal sm:mx-[0] not-italic text-[20px] text-black_900 sm:w-[100%] w-[17%]"
                      placeholderClassName="text-black_900"
                      name="DropdownPrice"
                      placeholder="Price range"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="w-[15px] mr-[20px] sm:mr-[7px] sm:w-[5px] md:mr-[10px] md:w-[7px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                      size="md"
                      variant="OutlineIndigo400"
                    ></SelectBox>
                    <SelectBox
                      className="font-normal sm:mx-[0] not-italic text-[20px] text-black_900 sm:w-[100%] w-[22%]"
                      placeholderClassName="text-black_900"
                      name="DropdownPrope"
                      placeholder="Property Type"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="w-[15px] mr-[20px] sm:mr-[7px] sm:w-[5px] md:mr-[10px] md:w-[7px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                      size="md"
                      variant="OutlineIndigo400"
                    ></SelectBox>
                    <SelectBox
                      className="font-normal sm:mx-[0] not-italic text-[20px] text-black_900 sm:w-[100%] w-[19%]"
                      placeholderClassName="text-black_900"
                      name="DropdownNumbe"
                      placeholder="Number of bed"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="w-[15px] mr-[20px] sm:mr-[7px] sm:w-[5px] md:mr-[10px] md:w-[7px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                      size="lg"
                      variant="OutlineIndigo400"
                    ></SelectBox>
                    <SelectBox
                      className="font-normal sm:mx-[0] not-italic text-[20px] text-black_900 sm:w-[100%] w-[13%]"
                      placeholderClassName="text-black_900"
                      name="DropdownMore"
                      placeholder="More"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="w-[15px] mr-[20px] sm:mr-[7px] sm:w-[5px] md:mr-[10px] md:w-[7px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                      size="lg"
                      variant="OutlineIndigo400"
                    ></SelectBox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1880px] ml-[auto] mr-[auto] sm:mt-[32px] md:mt-[41px] mt-[81px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
              <Text
                className="font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] not-italic text-black_901 w-[auto]"
                variant="body8"
              >
                1-10 of properties available for rent in Lagos{" "}
              </Text>
              <div className="flex flex-col items-center justify-start mt-[17px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                <Grid className="sm:gap-[34px] md:gap-[44px] gap-[87.14px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
                  <div
                    className="common-pointer bg-bluegray_100_66 flex flex-col items-center justify-start sm:pb-[3px] md:pb-[4px] pb-[9px] w-[100%]"
                    onClick={handleNavigate67}
                  >
                    <div className="flex flex-col justify-start pb-[2px] w-[100%]">
                      <Img
                        src="images/img_image2_231X340.png"
                        className="max-w-[100%] w-[100%]"
                        alt="imageTwo"
                      />
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                        <Img
                          src="images/img_image6.png"
                          className="flex-shrink-0 max-w-[100%] w-[6%]"
                          alt="imageSix"
                        />
                        <Text
                          className="flex-grow font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900"
                          variant="body8"
                        >
                          <span className="text-black_900 text-[16px] font-lato">
                            16, Emem Crescent, The Grand Estate, VI
                            <br />
                            <br />
                          </span>
                          <span className="text-indigo_400 text-[20px] font-lato font-bold">
                            N400, 000 pa
                            <br />
                          </span>
                          <span className="text-black_900 text-[16px] font-lato">
                            Monthly payments
                            <br />
                            <br />
                            Flat
                            <br />
                            <br />
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start md:ml-[11px] ml-[23px] sm:mt-[10px] md:mt-[13px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Img
                              src="images/img_image3.png"
                              className="max-w-[100%] w-[27%]"
                              alt="imageThree"
                            />
                            <Img
                              src="images/img_image4.png"
                              className="max-w-[100%] w-[23%]"
                              alt="imageFour"
                            />
                            <Img
                              src="images/img_image9.png"
                              className="max-w-[100%] w-[23%]"
                              alt="imageNine"
                            />
                          </div>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                            <Text
                              className="font-extrabold text-black_900 w-[auto]"
                              variant="body8"
                            >
                              1
                            </Text>
                            <Text
                              className="font-extrabold text-black_900 w-[auto]"
                              variant="body8"
                            >
                              1
                            </Text>
                            <Text
                              className="font-extrabold text-black_900 w-[auto]"
                              variant="body8"
                            >
                              1
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Stack
                    className="common-pointer h-[476px] relative w-[100%]"
                    onClick={handleNavigate61}
                  >
                    <div className="absolute bg-bluegray_100_66 sm:h-[191px] md:h-[246px] h-[476px] left-[0] w-[100%]"></div>
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] pb-[2px] sm:px-[0] w-[100%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <Img
                          src="images/img_image2_1.png"
                          className="max-w-[100%] w-[100%]"
                          alt="imageTwo One"
                        />
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                          <Img
                            src="images/img_image6.png"
                            className="flex-shrink-0 max-w-[100%] w-[6%]"
                            alt="imageSix One"
                          />
                          <Text
                            className="flex-grow font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900"
                            variant="body8"
                          >
                            <span className="text-black_900 text-[16px] font-lato">
                              325, Akinbade Road, Surulere, Lagos
                              <br />
                              <br />
                            </span>
                            <span className="text-indigo_400 text-[20px] font-lato font-bold">
                              N700, 000 pa
                              <br />
                            </span>
                            <span className="text-black_900 text-[16px] font-lato">
                              Biannual payments
                              <br />
                              <br />
                              Duplex
                              <br />
                              <br />
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[11px] ml-[23px] sm:mt-[10px] md:mt-[13px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                              <Img
                                src="images/img_image3.png"
                                className="max-w-[100%] w-[27%]"
                                alt="imageThree One"
                              />
                              <Img
                                src="images/img_image4.png"
                                className="max-w-[100%] w-[23%]"
                                alt="imageFour One"
                              />
                              <Img
                                src="images/img_image7.png"
                                className="max-w-[100%] w-[23%]"
                                alt="imageSeven"
                              />
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                              <Text
                                className="font-extrabold text-black_900 w-[auto]"
                                variant="body8"
                              >
                                4
                              </Text>
                              <Text
                                className="font-extrabold mb-[1px] text-black_900 w-[auto]"
                                variant="body8"
                              >
                                2
                              </Text>
                              <Text
                                className="font-extrabold text-black_900 w-[auto]"
                                variant="body8"
                              >
                                1
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Stack>
                  <Stack
                    className="common-pointer h-[476px] relative w-[100%]"
                    onClick={handleNavigate64}
                  >
                    <div className="absolute bg-bluegray_100_66 sm:h-[191px] md:h-[246px] h-[476px] left-[1%] w-[100%]"></div>
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] pb-[2px] sm:px-[0] w-[100%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <Img
                          src="images/img_image2_2.png"
                          className="max-w-[100%] w-[100%]"
                          alt="imageTwo Two"
                        />
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                          <Img
                            src="images/img_image6.png"
                            className="flex-shrink-0 max-w-[100%] w-[6%]"
                            alt="imageSix Two"
                          />
                          <Text
                            className="flex-grow font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900"
                            variant="body8"
                          >
                            <span className="text-black_900 text-[16px] font-lato">
                              78, Adeola Odeku St, Victoria Island, Lagos
                              <br />
                              <br />
                            </span>
                            <span className="text-indigo_400 text-[20px] font-lato font-bold">
                              N650, 000 pa
                              <br />
                            </span>
                            <span className="text-black_900 text-[16px] font-lato">
                              Monthly payments
                              <br />
                              <br />
                              Flat
                              <br />
                              <br />
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[11px] ml-[23px] sm:mt-[10px] md:mt-[13px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                              <Img
                                src="images/img_image3.png"
                                className="max-w-[100%] w-[27%]"
                                alt="imageThree Two"
                              />
                              <Img
                                src="images/img_image4.png"
                                className="max-w-[100%] w-[23%]"
                                alt="imageFour Two"
                              />
                              <Img
                                src="images/img_image7.png"
                                className="max-w-[100%] w-[23%]"
                                alt="imageSeven One"
                              />
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                              <Text
                                className="font-extrabold mb-[1px] text-black_900 w-[auto]"
                                variant="body8"
                              >
                                2
                              </Text>
                              <Text
                                className="font-extrabold mb-[1px] text-black_900 w-[auto]"
                                variant="body8"
                              >
                                2
                              </Text>
                              <Text
                                className="font-extrabold text-black_900 w-[auto]"
                                variant="body8"
                              >
                                1
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Stack>
                  <Stack
                    className="common-pointer h-[476px] relative w-[100%]"
                    onClick={handleNavigate68}
                  >
                    <div className="absolute bg-bluegray_100_66 sm:h-[191px] md:h-[246px] h-[476px] left-[0] w-[100%]"></div>
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] pb-[2px] sm:px-[0] w-[100%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <Img
                          src="images/img_image2_3.png"
                          className="max-w-[100%] w-[100%]"
                          alt="imageTwo Three"
                        />
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                          <Img
                            src="images/img_image6.png"
                            className="flex-shrink-0 max-w-[100%] w-[6%]"
                            alt="imageSix Three"
                          />
                          <Text
                            className="flex-grow font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900"
                            variant="body8"
                          >
                            <span className="text-black_900 text-[16px] font-lato">
                              23, Bode Thomas Street, Ikeja, Lagos
                              <br />
                              <br />
                            </span>
                            <span className="text-indigo_400 text-[20px] font-lato font-bold">
                              N880, 000 pa
                              <br />
                            </span>
                            <span className="text-black_900 text-[16px] font-lato">
                              Monthly payments
                              <br />
                              <br />
                              Flat
                              <br />
                              <br />
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[11px] ml-[23px] sm:mt-[10px] md:mt-[13px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                              <Img
                                src="images/img_image3.png"
                                className="max-w-[100%] w-[27%]"
                                alt="imageThree Three"
                              />
                              <Img
                                src="images/img_image4.png"
                                className="max-w-[100%] w-[23%]"
                                alt="imageFour Three"
                              />
                              <Img
                                src="images/img_image7.png"
                                className="max-w-[100%] w-[23%]"
                                alt="imageSeven Two"
                              />
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                              <Text
                                className="font-extrabold mb-[1px] text-black_900 w-[auto]"
                                variant="body8"
                              >
                                2
                              </Text>
                              <Text
                                className="font-extrabold mb-[1px] text-black_900 w-[auto]"
                                variant="body8"
                              >
                                2
                              </Text>
                              <Text
                                className="font-extrabold text-black_900 w-[auto]"
                                variant="body8"
                              >
                                1
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Stack>
                  <Stack
                    className="common-pointer h-[476px] relative w-[100%]"
                    onClick={handleNavigate62}
                  >
                    <div className="absolute bg-bluegray_100_66 sm:h-[191px] md:h-[246px] h-[476px] left-[0] w-[100%]"></div>
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] pb-[2px] sm:px-[0] w-[100%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <Img
                          src="images/img_image2_4.png"
                          className="max-w-[100%] w-[100%]"
                          alt="imageTwo Four"
                        />
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                          <Img
                            src="images/img_image6.png"
                            className="flex-shrink-0 max-w-[100%] w-[6%]"
                            alt="imageSix Four"
                          />
                          <Text
                            className="flex-grow font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900"
                            variant="body8"
                          >
                            <span className="text-black_900 text-[16px] font-lato">
                              1, Isaac John Street, Orange Apartments, Ajah,{" "}
                              <br />
                              <br />
                            </span>
                            <span className="text-indigo_400 text-[20px] font-lato font-bold">
                              N550, 000 pa
                              <br />
                            </span>
                            <span className="text-black_900 text-[16px] font-lato">
                              Monthly payments
                              <br />
                              <br />
                              Flat
                              <br />
                              <br />
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[11px] ml-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                              <Img
                                src="images/img_image3.png"
                                className="max-w-[100%] w-[27%]"
                                alt="imageThree Four"
                              />
                              <Img
                                src="images/img_image4.png"
                                className="max-w-[100%] w-[23%]"
                                alt="imageFour Four"
                              />
                              <Img
                                src="images/img_image7.png"
                                className="max-w-[100%] w-[23%]"
                                alt="imageSeven Three"
                              />
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                              <Text
                                className="font-extrabold mb-[1px] text-black_900 w-[auto]"
                                variant="body8"
                              >
                                2
                              </Text>
                              <Text
                                className="font-extrabold text-black_900 w-[auto]"
                                variant="body8"
                              >
                                1
                              </Text>
                              <Text
                                className="font-extrabold text-black_900 w-[auto]"
                                variant="body8"
                              >
                                1
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Stack>
                  <Stack
                    className="common-pointer h-[476px] relative w-[100%]"
                    onClick={handleNavigate65}
                  >
                    <div className="absolute bg-bluegray_100_66 sm:h-[191px] md:h-[246px] h-[476px] left-[0] w-[100%]"></div>
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] sm:px-[0] w-[100%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <Img
                          src="images/img_image2_5.png"
                          className="max-w-[100%] w-[100%]"
                          alt="imageTwo Five"
                        />
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                          <Img
                            src="images/img_image6.png"
                            className="flex-shrink-0 max-w-[100%] w-[6%]"
                            alt="imageSix Five"
                          />
                          <Text
                            className="flex-grow font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900"
                            variant="body8"
                          >
                            <span className="text-black_900 text-[16px] font-lato">
                              35, Ozumba Mbadiwe Ave, Yaba
                              <br />
                              <br />
                            </span>
                            <span className="text-indigo_400 text-[20px] font-lato font-bold">
                              N600, 000 pa
                              <br />
                            </span>
                            <span className="text-black_900 text-[16px] font-lato">
                              Monthly payments
                              <br />
                              <br />
                              Duplex
                              <br />
                              <br />
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[11px] ml-[23px] sm:mt-[10px] md:mt-[13px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                              <Img
                                src="images/img_image3.png"
                                className="max-w-[100%] w-[27%]"
                                alt="imageThree Five"
                              />
                              <Img
                                src="images/img_image4.png"
                                className="max-w-[100%] w-[23%]"
                                alt="imageFour Five"
                              />
                              <Img
                                src="images/img_image7.png"
                                className="max-w-[100%] w-[23%]"
                                alt="imageSeven Four"
                              />
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                              <Text
                                className="font-extrabold text-black_900 w-[auto]"
                                variant="body8"
                              >
                                3
                              </Text>
                              <Text
                                className="font-extrabold text-black_900 w-[auto]"
                                variant="body8"
                              >
                                2
                              </Text>
                              <Text
                                className="font-extrabold text-black_900 w-[auto]"
                                variant="body8"
                              >
                                1
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Stack>
                  <Stack
                    className="common-pointer h-[476px] relative w-[100%]"
                    onClick={handleNavigate69}
                  >
                    <div className="absolute bg-bluegray_100_66 sm:h-[191px] md:h-[246px] h-[476px] left-[0] w-[100%]"></div>
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] pb-[2px] sm:px-[0] w-[100%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <Img
                          src="images/img_image2_6.png"
                          className="max-w-[100%] w-[100%]"
                          alt="imageTwo Six"
                        />
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                          <Img
                            src="images/img_image6.png"
                            className="flex-shrink-0 max-w-[100%] w-[6%]"
                            alt="imageSix Six"
                          />
                          <Text
                            className="flex-grow font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900"
                            variant="body8"
                          >
                            <span className="text-black_900 text-[16px] font-lato">
                              46, Gambari St, Oceanview Estate, Ikoyi
                              <br />
                              <br />
                            </span>
                            <span className="text-indigo_400 text-[20px] font-lato font-bold">
                              N1,200, 000 pa
                              <br />
                            </span>
                            <span className="text-black_900 text-[16px] font-lato">
                              Monthly payments
                              <br />
                              <br />
                              Flat
                              <br />
                              <br />
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[11px] ml-[23px] sm:mt-[10px] md:mt-[13px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                              <Img
                                src="images/img_image3.png"
                                className="max-w-[100%] sm:w-[100%] w-[42%]"
                                alt="imageThree Six"
                              />
                              <Img
                                src="images/img_image4.png"
                                className="max-w-[100%] w-[36%]"
                                alt="imageFour Six"
                              />
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                              <Text
                                className="font-extrabold mb-[1px] text-black_900 w-[auto]"
                                variant="body8"
                              >
                                2
                              </Text>
                              <Text
                                className="font-extrabold text-black_900 w-[auto]"
                                variant="body8"
                              >
                                1
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Stack>
                  <Stack
                    className="common-pointer h-[476px] relative w-[100%]"
                    onClick={handleNavigate63}
                  >
                    <div className="absolute bg-bluegray_100_66 sm:h-[191px] md:h-[246px] h-[476px] left-[0] w-[100%]"></div>
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] pb-[2px] sm:px-[0] w-[100%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <Img
                          src="images/img_image2_7.png"
                          className="max-w-[100%] w-[100%]"
                          alt="imageTwo Seven"
                        />
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                          <Img
                            src="images/img_image6.png"
                            className="flex-shrink-0 max-w-[100%] w-[6%]"
                            alt="imageSix Seven"
                          />
                          <Text
                            className="flex-grow font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900"
                            variant="body8"
                          >
                            <span className="text-black_900 text-[16px] font-lato">
                              96, Freeman Road, Oniru Estate
                              <br />
                              <br />
                            </span>
                            <span className="text-indigo_400 text-[20px] font-lato font-bold">
                              N850, 000 pa
                              <br />
                            </span>
                            <span className="text-black_900 text-[16px] font-lato">
                              Monthly payments
                              <br />
                              <br />
                              Flat
                              <br />
                              <br />
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[11px] ml-[23px] sm:mt-[10px] md:mt-[13px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                              <Img
                                src="images/img_image3.png"
                                className="max-w-[100%] sm:w-[100%] w-[42%]"
                                alt="imageThree Seven"
                              />
                              <Img
                                src="images/img_image4.png"
                                className="max-w-[100%] w-[36%]"
                                alt="imageFour Seven"
                              />
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                              <Text
                                className="font-extrabold mb-[1px] text-black_900 w-[auto]"
                                variant="body8"
                              >
                                2
                              </Text>
                              <Text
                                className="font-extrabold text-black_900 w-[auto]"
                                variant="body8"
                              >
                                1
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Stack>
                  <Stack
                    className="common-pointer h-[476px] relative w-[100%]"
                    onClick={handleNavigate57}
                  >
                    <div className="absolute bg-bluegray_100_66 sm:h-[191px] md:h-[246px] h-[476px] left-[0] w-[100%]"></div>
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] sm:px-[0] w-[100%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <Img
                          src="images/img_image2_8.png"
                          className="max-w-[100%] w-[100%]"
                          alt="imageTwo Eight"
                        />
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                          <Img
                            src="images/img_image6.png"
                            className="flex-shrink-0 max-w-[100%] w-[6%]"
                            alt="imageSix Eight"
                          />
                          <Text
                            className="flex-grow font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900"
                            variant="body8"
                          >
                            <span className="text-black_900 text-[16px] font-lato">
                              2, Awolowo Road, Olive Garden Homes, Surulere
                              <br />
                              <br />
                            </span>
                            <span className="text-indigo_400 text-[20px] font-lato font-bold">
                              N1, 700, 000 pa
                              <br />
                            </span>
                            <span className="text-black_900 text-[16px] font-lato">
                              Biannual payments
                              <br />
                              <br />
                              Duplex
                              <br />
                              <br />
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[11px] ml-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                              <Img
                                src="images/img_image3.png"
                                className="max-w-[100%] w-[27%]"
                                alt="imageThree Eight"
                              />
                              <Img
                                src="images/img_image4.png"
                                className="max-w-[100%] w-[23%]"
                                alt="imageFour Eight"
                              />
                              <Img
                                src="images/img_image7.png"
                                className="max-w-[100%] w-[23%]"
                                alt="imageSeven Five"
                              />
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                              <Text
                                className="font-extrabold text-black_900 w-[auto]"
                                variant="body8"
                              >
                                4
                              </Text>
                              <Text
                                className="font-extrabold text-black_900 w-[auto]"
                                variant="body8"
                              >
                                3
                              </Text>
                              <Text
                                className="font-extrabold text-black_900 w-[auto]"
                                variant="body8"
                              >
                                2
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Stack>
                </Grid>
              </div>
            </div>
            <Img
              src="images/img_mapsiclemap.png"
              className="max-w-[100%] w-[33%]"
              alt="MapsicleMap"
            />
          </div>
          <footer className="bg-bluegray_100_7f font-overpass md:mt-[120px] mt-[233px] sm:mt-[93px] w-[100%]">
            <div className="flex flex-col justify-start max-w-[1802px] sm:mb-[19px] md:mb-[25px] mb-[49px] md:ml-[46px] ml-[auto] md:mr-[13px] mr-[auto] sm:mt-[15px] md:mt-[20px] mt-[40px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
                  className="font-medium sm:ml-[214px] md:ml-[277px] ml-[538px] sm:mt-[15px] md:mt-[20px] mt-[40px] text-black_901 w-[auto]"
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
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[141px] ml-[274px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
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
                  onClick={handleNavigate88}
                  alt="twitter"
                />
                <Img
                  src="images/img_linkedin.svg"
                  className="sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[17px] sm:ml-[6px] md:ml-[8px] sm:mt-[31px] md:mt-[40px] mt-[78px] sm:w-[12px] md:w-[16px] w-[32px]"
                  alt="linkedin"
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

export default PropertiesPagePage;
