import React from "react";

import {
  Stack,
  Img,
  Text,
  Button,
  Line,
  List,
  Input,
  Grid,
  TextArea,
} from "components";
import { useNavigate } from "react-router-dom";

const LandingPageDesktopPage = () => {
  const navigate = useNavigate();

  function handleNavigate9() {
    navigate("/calculatorpage");
  }
  function handleNavigate10() {
    navigate("/contactuspage");
  }
  function handleNavigate14() {
    navigate("/propertiespage");
  }
  function handleNavigate15() {
    navigate("/propertiespage");
  }
  function handleNavigate16() {
    navigate("/propertiespage");
  }
  function handleNavigate17() {
    navigate("/aboutuspage");
  }
  function handleNavigate18() {
    navigate("/propertiespage");
  }
  function handleNavigate19() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate20() {
    navigate("/contactuspage");
  }
  function handleNavigate21() {
    navigate("/propertiespage");
  }
  function handleNavigate22() {
    navigate("/propertiespage");
  }
  function handleNavigate23() {
    navigate("/propertiespage");
  }
  function handleNavigate24() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate25() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate26() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate27() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate28() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate31() {
    navigate("/aboutuspage");
  }
  function handleNavigate32() {
    navigate("/propertiespage");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-overpass items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pt-[15px] pt-[19px] md:pt-[9px] sm:px-[15px] px-[19px] md:px-[9px] shadow-bs w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1753px] md:ml-[22px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
                        className="cursor-pointer font-normal not-italic text-indigo_400 w-[auto]"
                        variant="body8"
                        rel="noreferrer"
                      >
                        Home
                      </a>
                    </div>
                  </li>
                  <li className="w-[16%] ml-[63px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[32px] flex-col flex">
                    <div
                      className="common-pointer flex flex-col items-center justify-start p-[12px] sm:p-[4px] md:p-[6px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0]"
                      onClick={handleNavigate17}
                    >
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal sm:my-[12px] md:my-[16px] my-[31px] not-italic text-black_901 hover:text-indigo_400 w-[auto]"
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
                      className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_900 hover:text-indigo_400"
                      onClick={handleNavigate18}
                      rel="noreferrer"
                    >
                      Properties
                    </a>
                  </li>
                  <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                    <a
                      href={"javascript:"}
                      className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901 hover:text-indigo_400"
                      onClick={handleNavigate9}
                      rel="noreferrer"
                    >
                      Calculator
                    </a>
                  </li>
                  <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                    <a
                      href={"javascript:"}
                      className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901 hover:text-indigo_400"
                      onClick={handleNavigate10}
                      rel="noreferrer"
                    >
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
              <Button
                className="cursor-pointer font-normal min-w-[10%] sm:ml-[103px] md:ml-[133px] ml-[259px] not-italic text-[16px] text-center text-indigo_900 w-[max-content]"
                shape="RoundedBorder4"
              >
                Login
              </Button>
              <Img
                src="images/img_menu.svg"
                className="sm:h-[18px] md:h-[24px] h-[45px] max-w-[100%] sm:ml-[23px] md:ml-[30px] ml-[60px] sm:w-[17px] md:w-[23px] w-[45px]"
                alt="menu"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start mt-[148px] sm:mt-[59px] md:mt-[76px] w-[100%]">
          <Stack className="h-[2397px] overflow-auto relative w-[100%]">
            <Stack className="absolute font-lato h-[1727px] top-[2%] w-[100%]">
              <div className="absolute flex flex-col items-end justify-start pl-[100px] sm:pl-[15px] md:pl-[51px] py-[100px] sm:py-[39px] md:py-[51px] top-[0] w-[100%]">
                <div className="sm:mx-[0] overflow-x-auto sm:px-[0] sm:w-[100%] w-[97%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                      <Text
                        className="font-overpass leading-[82.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-black_901 md:tracking-ls1 sm:tracking-ls1 tracking-ls148 sm:w-[100%] w-[96%]"
                        as="h1"
                        variant="h1"
                      >
                        Find a home with a flexible payment plan
                      </Text>
                      <Text
                        className="font-lato font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[40px] text-black_901 w-[100%]"
                        variant="body6"
                      >
                        Perhaps the biggest challenge faced by people looking to
                        rent a new house is the lack of flexible payment plans.
                        At RentEase, we keep that in mind and as such have
                        created a system where renters have flexible payment
                        plans and can keep their initial investment to the
                        minimum so that it becomes comfortable to own a home
                        with ease.{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col sm:mx-[0] sm:p-[15px] md:p-[20px] p-[40px] rounded-radius20 sm:w-[100%] w-[39%]"
                        style={{
                          backgroundImage: "url('images/defaultNoData.png')",
                        }}
                      >
                        <Text
                          className="font-normal sm:mt-[127px] md:mt-[165px] mt-[320px] not-italic text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          Minimalist House
                        </Text>
                        <Text
                          className="font-normal md:mb-[10px] mb-[20px] sm:mb-[7px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-white_A700 w-[auto]"
                          variant="body6"
                        >
                          50 Units
                        </Text>
                      </div>
                      <Img
                        src="images/img_img.png"
                        className="max-w-[100%] rounded-radius20 w-[18%]"
                        alt="Img"
                      />
                      <Img
                        src="images/img_img_474X197.png"
                        className="max-w-[100%] rounded-radius20 w-[18%]"
                        alt="Img One"
                      />
                      <Img
                        src="images/img_img_1.png"
                        className="max-w-[100%] rounded-radius20 w-[18%]"
                        alt="Img Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start p-[100px] md:p-[51px] sm:px-[15px] sm:py-[39px] w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                  <div className="border border-solid border-white_A700 flex flex-col sm:mx-[0] sm:pl-[0] md:pr-[113px] sm:pr-[15px] pr-[219px] md:py-[113px] py-[219px] sm:py-[87px] sm:w-[100%] w-[48%]">
                    <div className="flex flex-col justify-start md:mb-[100px] mb-[194px] sm:mb-[77px] mt-[134px] sm:mt-[53px] md:mt-[69px] sm:px-[0] w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[48%]">
                        <Line className="bg-indigo_400 h-[2px] my-[11px] sm:my-[4px] md:my-[5px] sm:w-[100%] w-[47%]" />
                        <a
                          href={"javascript:"}
                          className="common-pointer font-normal ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-indigo_400 underline w-[auto]"
                          onClick={handleNavigate31}
                          rel="noreferrer"
                        >
                          About Us
                        </a>
                      </div>
                      <Text
                        className="font-bold font-overpass md:mt-[12px] mt-[24px] sm:mt-[9px] text-black_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Our Vision for you
                      </Text>
                    </div>
                  </div>
                  <div className="border border-solid border-white_A700 flex flex-col md:ml-[30px] ml-[60px] sm:mx-[0] pb-[160px] sm:pb-[63px] md:pb-[82px] sm:px-[0] sm:w-[100%] w-[48%]">
                    <Img
                      src="images/img_frame132.png"
                      className="max-w-[100%] rounded-radius16 w-[100%]"
                      alt="Frame132"
                    />
                    <Text
                      className="font-lato font-light leading-[normal] sm:mt-[23px] md:mt-[30px] mt-[60px] text-black_901 w-[100%]"
                      variant="body6"
                    >
                      We aim to be the preferred real estate firm for buyers,
                      sellers, and renters by providing great customer service
                      and developing lifetime friendships one house at a time.
                      You can be rest assured that we will help you in selecting
                      a payment plan as per your specific requirements and help
                      you maximize your money's potential to the fullest.
                    </Text>
                    <Button
                      className="cursor-pointer font-normal font-overpass min-w-[26%] sm:mt-[23px] md:mt-[30px] mt-[60px] not-italic text-[16px] text-center text-indigo_900 w-[max-content]"
                      shape="RoundedBorder4"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </Stack>
            <div className="absolute flex flex-col font-overpass justify-start w-[100%]">
              <div className="flex flex-col justify-start md:ml-[134px] ml-[260px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                <div
                  className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]"
                  onClick={handleNavigate21}
                >
                  <Line className="bg-indigo_400 h-[2px] my-[12px] sm:my-[4px] md:my-[6px] sm:w-[100%] w-[50%]" />
                  <a
                    href={"javascript:"}
                    className="font-normal ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-indigo_400 underline w-[auto]"
                    rel="noreferrer"
                  >
                    Projects
                  </a>
                </div>
                <Text
                  className="font-normal font-overpass md:mt-[10px] mt-[21px] sm:mt-[8px] not-italic text-black_901 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Take a look at our top ranking estates
                </Text>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[100px] sm:mt-[39px] md:mt-[51px] w-[100%]">
                <List
                  className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[39%]"
                  orientation="horizontal"
                >
                  <div
                    className="common-pointer bg-cover bg-no-repeat flex flex-col justify-end sm:p-[15px] md:p-[20px] p-[40px] rounded-radius16 w-[100%]"
                    style={{
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                    onClick={handleNavigate22}
                  >
                    <Text
                      className="font-normal sm:mb-[3px] md:mb-[4px] mb-[8px] sm:mt-[158px] md:mt-[204px] mt-[396px] not-italic text-white_A700 w-[auto]"
                      variant="body7"
                    >
                      THE GRAND ESTATE
                    </Text>
                  </div>
                  <div
                    className="common-pointer bg-cover bg-no-repeat flex flex-col justify-end sm:p-[15px] md:p-[20px] p-[40px] rounded-radius16 w-[100%]"
                    style={{
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                    onClick={handleNavigate23}
                  >
                    <Text
                      className="font-normal sm:mb-[3px] md:mb-[4px] mb-[8px] sm:mt-[158px] md:mt-[204px] mt-[396px] not-italic text-white_A700 w-[auto]"
                      variant="body7"
                    >
                      OLIVE GARDEN HOMES{" "}
                    </Text>
                  </div>
                </List>
                <div
                  className="common-pointer bg-cover bg-no-repeat flex flex-col sm:mx-[0] md:pb-[14px] sm:pb-[15px] pb-[29px] md:px-[14px] sm:px-[15px] px-[29px] rounded-radius16 sm:w-[100%] w-[19%]"
                  style={{ backgroundImage: "url('images/defaultNoData.png')" }}
                  onClick={handleNavigate14}
                >
                  <Img
                    src="images/img_bookmark_57X36.svg"
                    className="max-w-[100%] sm:ml-[105px] md:ml-[136px] ml-[264px] w-[12%]"
                    alt="bookmark One"
                  />
                  <div className="flex flex-col justify-start mb-[15px] sm:mb-[5px] md:mb-[7px] md:mt-[11px] mt-[23px] sm:mt-[9px] sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[93%]">
                    <Text
                      className="font-normal leading-[23.00px] md:leading-[normal] sm:leading-[normal] not-italic text-white_A700 w-[100%]"
                      variant="body7"
                    >
                      finding new homes for families, singles and couples is our
                      main priority
                    </Text>
                    <Text
                      className="font-normal sm:mt-[116px] md:mt-[150px] mt-[291px] not-italic text-white_A700 w-[auto]"
                      variant="body7"
                    >
                      ORANGE APARTMENTS
                    </Text>
                  </div>
                </div>
                <List
                  className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[39%]"
                  orientation="horizontal"
                >
                  <div
                    className="common-pointer bg-cover bg-no-repeat flex flex-col justify-end sm:p-[15px] md:p-[20px] p-[40px] rounded-radius16 w-[100%]"
                    style={{
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                    onClick={handleNavigate15}
                  >
                    <Text
                      className="font-normal sm:mb-[3px] md:mb-[4px] mb-[8px] sm:mt-[158px] md:mt-[204px] mt-[396px] not-italic text-white_A700 w-[auto]"
                      variant="body7"
                    >
                      ONIRU ESTATE
                    </Text>
                  </div>
                  <div
                    className="common-pointer bg-cover bg-no-repeat flex flex-col justify-end sm:p-[15px] md:p-[20px] p-[40px] rounded-radius16 w-[100%]"
                    style={{
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                    onClick={handleNavigate16}
                  >
                    <Text
                      className="font-normal sm:mb-[3px] md:mb-[4px] mb-[8px] sm:mt-[158px] md:mt-[204px] mt-[396px] not-italic text-white_A700 w-[auto]"
                      variant="body7"
                    >
                      THE GRAND ESTATE
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <Input
              className="absolute font-normal font-overpass not-italic p-[0] right-[0] text-[20px] placeholder:text-black_900 text-black_900 top-[0] w-[100%]"
              wrapClassName="absolute md:mr-[54px] mr-[105px] right-[5%] sm:mx-[0] sm:w-[100%] w-[23%]"
              name="Frame170"
              placeholder="Search here"
              shape="RoundedBorder10"
              size="sm"
              variant="OutlineGray300"
            ></Input>
          </Stack>
          <div className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[9px] p-[100px] md:p-[51px] sm:px-[15px] sm:py-[39px] w-[100%]">
            <div className="border border-solid border-white_A700 flex flex-col justify-start max-w-[1400px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div
                className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]"
                onClick={handleNavigate32}
              >
                <Line className="bg-indigo_400 h-[2px] my-[12px] sm:my-[4px] md:my-[6px] sm:w-[100%] w-[45%]" />
                <a
                  href={"javascript:"}
                  className="font-normal ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-indigo_400 underline w-[auto]"
                  rel="noreferrer"
                >
                  Properties
                </a>
              </div>
              <Text
                className="font-bold font-overpass mt-[17px] sm:mt-[6px] md:mt-[8px] text-black_901 w-[auto]"
                as="h3"
                variant="h3"
              >
                Find your Dream Home{" "}
              </Text>
            </div>
            <Grid className="gap-[136px] sm:gap-[54px] md:gap-[70px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 max-w-[1400px] min-h-[auto] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
              <div
                className="common-pointer flex flex-col items-center justify-start sm:px-[0] rounded-radius16 w-[100%]"
                onClick={handleNavigate24}
              >
                <Img
                  src="images/img_frame41.png"
                  className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                  alt="FrameFortyOne"
                />
                <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:p-[10px] sm:p-[15px] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] shadow-bs1 w-[100%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-semibold text-black_901 w-[auto]"
                      variant="body4"
                    >
                      Olive Garden Homes
                    </Text>
                    <div className="flex flex-col font-lato justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                      <Text
                        className="font-normal not-italic text-black_901 w-[auto]"
                        variant="body7"
                      >
                        Lekki, Lagos
                      </Text>
                      <Text
                        className="font-normal mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-indigo_400 w-[auto]"
                        variant="body7"
                      >
                        N290,000.00
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex sm:h-[16px] md:h-[21px] h-[40px] items-center justify-center sm:mb-[29px] md:mb-[38px] mb-[74px] sm:w-[15px] md:w-[20px] w-[40px]"
                    size="mdIcn"
                    variant="icbFillIndigo400"
                  >
                    <Img
                      src="images/img_computer.svg"
                      className="flex items-center justify-center"
                      alt="computer"
                    />
                  </Button>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start sm:px-[0] rounded-radius16 w-[100%]"
                onClick={handleNavigate25}
              >
                <Img
                  src="images/img_frame41_371X376.png"
                  className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                  alt="FrameFortyOne One"
                />
                <div className="bg-indigo_400 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:p-[10px] sm:p-[15px] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-semibold text-white_A700 w-[auto]"
                      variant="body4"
                    >
                      The Grand Estate
                    </Text>
                    <div className="flex flex-col font-lato justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                      <Text
                        className="font-normal not-italic text-white_A700 w-[auto]"
                        variant="body7"
                      >
                        Victoria Island, Lagos
                      </Text>
                      <Text
                        className="font-normal mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-white_A700 w-[auto]"
                        variant="body7"
                      >
                        N160,000.00
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex sm:h-[16px] md:h-[21px] h-[40px] items-center justify-center sm:mb-[29px] md:mb-[38px] mb-[74px] sm:w-[15px] md:w-[20px] w-[40px]"
                    size="mdIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="flex items-center justify-center"
                      alt="favorite"
                    />
                  </Button>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start sm:px-[0] rounded-radius16 w-[100%]"
                onClick={handleNavigate26}
              >
                <Img
                  src="images/img_frame41_1.png"
                  className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                  alt="FrameFortyOne Two"
                />
                <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:p-[10px] sm:p-[15px] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] shadow-bs1 w-[100%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-semibold text-black_901 w-[auto]"
                      variant="body4"
                    >
                      Pinnacle Towers
                    </Text>
                    <div className="flex flex-col font-lato justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                      <Text
                        className="font-normal not-italic text-black_901 w-[auto]"
                        variant="body7"
                      >
                        Ikorodu, Lagos
                      </Text>
                      <Text
                        className="font-normal mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-indigo_400 w-[auto]"
                        variant="body7"
                      >
                        N450,000.00
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex sm:h-[16px] md:h-[21px] h-[40px] items-center justify-center sm:mb-[29px] md:mb-[38px] mb-[74px] sm:w-[15px] md:w-[20px] w-[40px]"
                    size="mdIcn"
                    variant="icbFillIndigo400"
                  >
                    <Img
                      src="images/img_computer.svg"
                      className="flex items-center justify-center"
                      alt="computer One"
                    />
                  </Button>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start sm:px-[0] rounded-radius16 w-[100%]"
                onClick={handleNavigate27}
              >
                <Img
                  src="images/img_frame41.png"
                  className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                  alt="FrameFortyOne Three"
                />
                <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:p-[10px] sm:p-[15px] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] shadow-bs1 w-[100%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-semibold text-black_901 w-[auto]"
                      variant="body4"
                    >
                      Oceanview Estate
                    </Text>
                    <div className="flex flex-col font-lato justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                      <Text
                        className="font-normal not-italic text-gray_901 w-[auto]"
                        variant="body7"
                      >
                        GRA, Ikeja, Lagos
                      </Text>
                      <Text
                        className="font-normal mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-indigo_400 w-[auto]"
                        variant="body7"
                      >
                        N295,000.00
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex sm:h-[16px] md:h-[21px] h-[40px] items-center justify-center sm:mb-[29px] md:mb-[38px] mb-[74px] sm:w-[15px] md:w-[20px] w-[40px]"
                    size="mdIcn"
                    variant="icbFillIndigo400"
                  >
                    <Img
                      src="images/img_computer.svg"
                      className="flex items-center justify-center"
                      alt="computer Two"
                    />
                  </Button>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start sm:px-[0] rounded-radius16 w-[100%]"
                onClick={handleNavigate28}
              >
                <Img
                  src="images/img_frame41_371X376.png"
                  className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                  alt="FrameFortyOne Four"
                />
                <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:p-[10px] sm:p-[15px] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] shadow-bs1 w-[100%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-semibold text-black_901 w-[auto]"
                      variant="body4"
                    >
                      Orange Apartments{" "}
                    </Text>
                    <div className="flex flex-col font-lato items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                      <Text
                        className="font-normal not-italic text-gray_901 w-[auto]"
                        variant="body7"
                      >
                        Ikotun, Lagos
                      </Text>
                      <Text
                        className="font-normal mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-indigo_400 w-[auto]"
                        variant="body7"
                      >
                        N350,000.00
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex sm:h-[16px] md:h-[21px] h-[40px] items-center justify-center sm:mb-[29px] md:mb-[38px] mb-[74px] sm:w-[15px] md:w-[20px] w-[40px]"
                    size="mdIcn"
                    variant="icbFillIndigo400"
                  >
                    <Img
                      src="images/img_computer.svg"
                      className="flex items-center justify-center"
                      alt="computer Three"
                    />
                  </Button>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start sm:px-[0] rounded-radius16 w-[100%]"
                onClick={handleNavigate19}
              >
                <Img
                  src="images/img_frame41_1.png"
                  className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                  alt="FrameFortyOne Five"
                />
                <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:p-[10px] sm:p-[15px] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] shadow-bs1 w-[100%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-semibold text-black_901 w-[auto]"
                      variant="body4"
                    >
                      Oniru Estate
                    </Text>
                    <div className="flex flex-col font-lato justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                      <Text
                        className="font-normal not-italic text-black_901 w-[auto]"
                        variant="body7"
                      >
                        Oniru, Lagos
                      </Text>
                      <Text
                        className="font-normal mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-indigo_400 w-[auto]"
                        variant="body7"
                      >
                        N370,000.00
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex sm:h-[16px] md:h-[21px] h-[40px] items-center justify-center sm:mb-[29px] md:mb-[38px] mb-[74px] sm:w-[15px] md:w-[20px] w-[40px]"
                    size="mdIcn"
                    variant="icbFillIndigo400"
                  >
                    <Img
                      src="images/img_computer.svg"
                      className="flex items-center justify-center"
                      alt="computer Four"
                    />
                  </Button>
                </div>
              </div>
            </Grid>
          </div>
          <Button
            className="cursor-pointer font-normal min-w-[15%] sm:mt-[20px] md:mt-[26px] mt-[52px] not-italic text-[16px] text-center text-indigo_900 w-[max-content]"
            shape="RoundedBorder4"
          >
            Explore
          </Button>
          <Stack className="font-lato h-[1873px] relative w-[100%]">
            <div className="absolute flex flex-col items-center justify-start p-[100px] md:p-[51px] sm:px-[15px] sm:py-[39px] top-[0] w-[100%]">
              <div className="border border-solid border-white_A700 flex flex-col items-center justify-start sm:mx-[0] sm:pb-[3px] md:pb-[4px] pb-[9px] sm:px-[0] md:px-[4px] px-[9px] sm:w-[100%] w-[94%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                  <Line className="bg-indigo_400 h-[2px] my-[11px] sm:my-[4px] md:my-[5px] sm:w-[100%] w-[43%]" />
                  <Text
                    className="font-normal ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic text-indigo_400 w-[auto]"
                    variant="body4"
                  >
                    Our Clients
                  </Text>
                </div>
                <Text
                  className="font-bold font-overpass md:mt-[12px] mt-[24px] sm:mt-[9px] text-gray_901 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Testimonials
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                <Stack className="h-[272px] relative w-[100%]">
                  <Img
                    src="images/img_volume_79X95.svg"
                    className="absolute h-[79px] left-[13%] max-w-[100%] top-[0] w-[9%]"
                    alt="volume One"
                  />
                  <div className="absolute border border-blue_200 border-solid flex flex-col items-center justify-start sm:pb-[23px] md:pb-[30px] pb-[60px] sm:px-[15px] md:px-[30px] px-[60px] w-[100%]">
                    <Text
                      className="leading-[35.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-center text-gray_901 sm:w-[100%] w-[75%]"
                      variant="body3"
                    >
                      When I got a new job in Lagos and had to look for a new
                      place, RentEase provided me with everything I needed. I
                      was able to find an apartment that suited my needs and
                      most importantly, one with a flexible payment plan. The
                      team is always there to provide whatever help you might
                      require.{" "}
                    </Text>
                  </div>
                </Stack>
                <Stack className="h-[50px] sm:mt-[12px] md:mt-[16px] mt-[32px] relative w-[100%]">
                  <Line className="absolute bg-blue_800 h-[3px] inset-x-[0] mx-[auto] top-[6%] w-[38%]" />
                  <List
                    className="absolute sm:gap-[130px] md:gap-[168px] gap-[325.5px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_ellipse18.png"
                        className="sm:h-[20px] md:h-[26px] h-[50px] rounded-radius50 sm:w-[19px] md:w-[25px] w-[50px]"
                        alt="EllipseEighteen"
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
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_ellipse18_50X50.png"
                        className="sm:h-[20px] md:h-[26px] h-[50px] rounded-radius50 sm:w-[19px] md:w-[25px] w-[50px]"
                        alt="EllipseEighteen One"
                      />
                      <div className="flex flex-col ml-[12px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
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
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_ellipse18_1.png"
                        className="sm:h-[20px] md:h-[26px] h-[50px] rounded-radius50 sm:w-[19px] md:w-[25px] w-[50px]"
                        alt="EllipseEighteen Two"
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
                  </List>
                </Stack>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] py-[140px] sm:py-[55px] md:py-[72px] sm:w-[100%] w-[73%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                  <div className="flex flex-col font-lato justify-start sm:px-[0] w-[100%]">
                    <div className="flex flex-col justify-start w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                        <Line className="bg-indigo_400 h-[2px] my-[11px] sm:my-[4px] md:my-[5px] sm:w-[100%] w-[44%]" />
                        <Text
                          className="common-pointer font-normal ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic text-indigo_400 w-[auto]"
                          variant="body4"
                          onClick={handleNavigate20}
                        >
                          Contact Us
                        </Text>
                      </div>
                      <Text
                        className="font-bold font-overpass md:mt-[12px] mt-[24px] sm:mt-[9px] text-gray_902 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Connect With Our Sales Team.
                      </Text>
                    </div>
                    <Text
                      className="font-light sm:mt-[17px] md:mt-[22px] mt-[43px] text-gray_901 w-[auto]"
                      variant="body6"
                    >
                      Our leasing agents are available for virtual and in-person
                      visits.
                      <br />
                    </Text>
                  </div>
                  <Input
                    className="font-lato font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                    wrapClassName="md:mt-[33px] mt-[65px] sm:mt-[25px] w-[100%]"
                    type="text"
                    name="Frame171"
                    placeholder="First Name"
                  ></Input>
                  <Input
                    className="font-lato font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                    wrapClassName="md:mt-[30px] mt-[60px] sm:mt-[23px] w-[100%]"
                    type="text"
                    name="Frame172"
                    placeholder="Last Name"
                  ></Input>
                  <Input
                    className="font-lato font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                    wrapClassName="md:mt-[30px] mt-[60px] sm:mt-[23px] w-[100%]"
                    type="email"
                    name="Frame173"
                    placeholder="Email"
                  ></Input>
                  <Input
                    className="font-lato font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                    wrapClassName="md:mt-[30px] mt-[60px] sm:mt-[23px] w-[100%]"
                    type="number"
                    name="Frame174"
                    placeholder="Number"
                  ></Input>
                  <TextArea
                    className="font-lato font-normal sm:mt-[23px] md:mt-[30px] mt-[60px] not-italic text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                    name="Frame175"
                    placeholder="Your message"
                  ></TextArea>
                  <Button
                    className="cursor-pointer font-overpass font-semibold sm:mt-[23px] md:mt-[30px] mt-[60px] text-[16px] text-center text-indigo_900 w-[100%]"
                    shape="RoundedBorder4"
                  >
                    Submit
                  </Button>
                </div>
                <div className="flex flex-col items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                    <Text
                      className="font-normal not-italic text-gray_902 w-[auto]"
                      variant="body4"
                    >
                      We are just one email away!
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-normal sm:mt-[12px] md:mt-[16px] mt-[31px] not-italic sm:text-[34px] md:text-[36px] text-[38px] text-gray_902 underline w-[auto]"
                      rel="noreferrer"
                    >
                      info@rentease.com
                    </a>
                  </div>
                  <div className="font-overpass mt-[183px] sm:mt-[73px] md:mt-[94px] overflow-x-auto w-[100%]">
                    <Stack className="h-[516px] relative w-[100%]">
                      <Stack className="absolute h-[506px] inset-y-[0] my-[auto] right-[0] w-[100%]">
                        <Img
                          src="images/img_vector.svg"
                          className="absolute bottom-[2%] h-[493px] max-w-[100%] w-[100%]"
                          alt="Vector"
                        />
                        <Stack
                          className="absolute bg-cover bg-no-repeat h-[502px] inset-[0] justify-center m-[auto] p-[1px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group7.svg')",
                          }}
                        >
                          <Img
                            src="images/img_vector_blue_53.svg"
                            className="absolute bottom-[0] h-[307px] max-w-[100%] right-[16%] sm:w-[100%] w-[59%]"
                            alt="Vector One"
                          />
                        </Stack>
                      </Stack>
                      <Stack className="absolute bottom-[0] h-[478px] right-[0] w-[100%]">
                        <Stack className="absolute h-[478px] w-[100%]">
                          <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap h-[max-content] inset-[0] items-start justify-center m-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                            <Img
                              src="images/img_group.svg"
                              className="max-w-[100%] sm:mt-[37px] md:mt-[49px] mt-[95px] w-[21%]"
                              alt="Group"
                            />
                            <Stack className="h-[367px] relative sm:w-[100%] w-[79%]">
                              <Stack className="absolute h-[367px] right-[4%] sm:w-[100%] w-[97%]">
                                <div className="absolute bottom-[0] flex flex-col items-center justify-start w-[100%]">
                                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                                    <Img
                                      src="images/img_vector_blue_A400.svg"
                                      className="max-w-[100%] sm:mt-[21px] md:mt-[27px] mt-[53px] w-[23%]"
                                      alt="Vector Two"
                                    />
                                    <Img
                                      src="images/img_cut.svg"
                                      className="max-w-[100%] w-[19%]"
                                      alt="cut"
                                    />
                                  </div>
                                </div>
                                <Img
                                  src="images/img_group_367X258.svg"
                                  className="absolute h-[367px] left-[3%] max-w-[100%] sm:w-[100%] w-[57%]"
                                  alt="Group One"
                                />
                              </Stack>
                              <Img
                                src="images/img_group_gray_302.svg"
                                className="absolute bottom-[3%] h-[128px] max-w-[100%] right-[0] sm:w-[100%] w-[77%]"
                                alt="Group Two"
                              />
                            </Stack>
                          </div>
                          <Img
                            src="images/img_group_bluegray_401.svg"
                            className="absolute h-[57px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[99%]"
                            alt="Group Three"
                          />
                          <Img
                            src="images/img_group_white_A700.svg"
                            className="absolute h-[54px] left-[15%] max-w-[100%] top-[24%] w-[19%]"
                            alt="Group Four"
                          />
                          <Img
                            src="images/img_group_blue_301.svg"
                            className="absolute h-[156px] max-w-[100%] right-[7%] top-[0] w-[35%]"
                            alt="Group Five"
                          />
                          <Stack className="absolute bottom-[30%] h-[160px] pb-[104px] sm:pb-[41px] md:pb-[53px] pr-[104px] sm:pr-[15px] md:pr-[53px] right-[5%] w-[33%]">
                            <Stack className="absolute bg-white_A700 h-[38px] left-[0] p-[1px] rounded-radius3 top-[10%] w-[27%]">
                              <Img
                                src="images/img_mail.svg"
                                className="absolute h-[36px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[99%]"
                                alt="mail"
                              />
                            </Stack>
                            <Text
                              className="absolute bg-deep_orange_A200 flex font-bold items-center left-[20%] pl-[4px] pr-[11px] sm:pr-[4px] md:pr-[5px] rounded-radius50 text-white_A700 top-[0] w-[31px]"
                              variant="body10"
                            >
                              85
                            </Text>
                          </Stack>
                        </Stack>
                        <Img
                          src="images/img_group_indigo_900.svg"
                          className="absolute h-[26px] max-w-[100%] right-[2%] top-[33%] w-[17%]"
                          alt="Group Seven"
                        />
                      </Stack>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </Stack>
          <footer className="bg-bluegray_100_7f font-overpass mt-[120px] sm:mt-[47px] md:mt-[61px] w-[100%]">
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
                      alt="volume Two"
                    />
                    <Img
                      src="images/img_bookmark.svg"
                      className="absolute h-[71px] max-w-[100%] right-[0] sm:w-[100%] w-[51%]"
                      alt="bookmark Two"
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
                  className="sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[16px] sm:ml-[6px] md:ml-[8px] sm:mt-[31px] md:mt-[40px] mt-[78px] sm:w-[12px] md:w-[16px] w-[32px]"
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

export default LandingPageDesktopPage;
