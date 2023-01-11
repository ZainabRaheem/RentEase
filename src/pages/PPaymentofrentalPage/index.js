import React from "react";

import { Stack, Img, Text, CheckBox, List, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const PPaymentofrentalPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/calculatorpage");
  }
  function handleNavigate1() {
    navigate("/contactuspage");
  }
  function handleNavigate2() {
    navigate("/");
  }
  function handleNavigate3() {
    navigate("/aboutuspage");
  }
  function handleNavigate4() {
    navigate("/prentapartmentpage");
  }
  function handleNavigate89() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-overpass items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pt-[15px] pt-[19px] md:pt-[9px] sm:px-[15px] px-[19px] md:px-[9px] shadow-bs w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1813px] md:ml-[22px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
                          className="common-pointer cursor-pointer font-normal not-italic text-black_901 w-[auto]"
                          variant="body8"
                          onClick={handleNavigate2}
                          rel="noreferrer"
                        >
                          Home
                        </a>
                      </div>
                    </li>
                    <li className="w-[16%] ml-[63px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[32px] flex-col flex">
                      <div
                        className="common-pointer flex flex-col items-center justify-start p-[12px] sm:p-[4px] md:p-[6px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0]"
                        onClick={handleNavigate3}
                      >
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
                        className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901"
                        onClick={handleNavigate4}
                        rel="noreferrer"
                      >
                        Properties
                      </a>
                    </li>
                    <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                      <a
                        href={"javascript:"}
                        className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901"
                        onClick={handleNavigate}
                        rel="noreferrer"
                      >
                        Calculator
                      </a>
                    </li>
                    <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                      <a
                        href={"javascript:"}
                        className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901"
                        onClick={handleNavigate1}
                        rel="noreferrer"
                      >
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
                <Stack className="border-bw15 border-solid border-white_A700 h-[55px] md:ml-[113px] ml-[220px] sm:ml-[87px] p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] relative rounded-radius15 w-[21%]">
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
              src="images/img_image2.png"
              className="max-w-[100%] w-[100%]"
              alt="imageTwo"
            />
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[1402px] md:ml-[132px] ml-[auto] mr-[auto] sm:mt-[34px] md:mt-[44px] mt-[87px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                <Text
                  className="font-medium text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Payment Details
                </Text>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mt-[14px] md:mt-[19px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Apartment Name:{" "}
                  </Text>
                  <Text
                    className="font-normal sm:ml-[23px] md:ml-[29px] ml-[58px] not-italic text-black_900 w-[auto]"
                    variant="body7"
                  >
                    Casa Dinero{" "}
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between ml-[3px] mt-[13px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Text
                    className="font-medium sm:mt-[2px] md:mt-[3px] mt-[7px] text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Apartment Type:{" "}
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900 w-[auto]"
                    variant="body7"
                  >
                    1 Bedrooms, 1 Living Room, 1 bathroom
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[10px] mt-[20px] sm:mt-[7px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Apartment address:{" "}
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900 w-[auto]"
                    variant="body7"
                  >
                    The Grande Estate, Victoria Island, Lagos
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                  <Text
                    className="font-medium mb-[1px] text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Number of tenants:{" "}
                  </Text>
                  <Text
                    className="font-normal sm:ml-[16px] md:ml-[21px] ml-[41px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-black_900 w-[auto]"
                    variant="body7"
                  >
                    Two, 2
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[10px] md:mt-[13px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                  <Text
                    className="font-medium mb-[1px] text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Tenant’s Name:
                  </Text>
                  <Text
                    className="font-normal sm:ml-[33px] md:ml-[43px] ml-[85px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-black_900 w-[auto]"
                    variant="body7"
                  >
                    Aisha Lawal Jimoh
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[10px] md:mt-[13px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                  <Text
                    className="font-medium mb-[1px] text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Tenant’s Email:
                  </Text>
                  <Text
                    className="font-normal sm:ml-[35px] md:ml-[45px] ml-[88px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-black_900 w-[auto]"
                    variant="body7"
                  >
                    ailawal.ha@gmail.com
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mt-[10px] md:mt-[13px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Telephone Number:
                  </Text>
                  <Text
                    className="font-normal sm:ml-[15px] md:ml-[19px] ml-[38px] not-italic text-black_900 w-[auto]"
                    variant="body7"
                  >
                    +234 801 345 36 00
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                  <Text
                    className="font-medium mb-[1px] text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Address:
                  </Text>
                  <Text
                    className="font-normal ml-[157px] sm:ml-[62px] md:ml-[81px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-black_900 w-[auto]"
                    variant="body7"
                  >
                    None
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mt-[10px] md:mt-[13px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Payment Mode:
                  </Text>
                  <Text
                    className="font-normal sm:ml-[32px] md:ml-[42px] ml-[82px] not-italic text-black_900 w-[auto]"
                    variant="body7"
                  >
                    Bank Transfer
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Length of Contract
                  </Text>
                  <Text
                    className="font-normal sm:ml-[18px] md:ml-[24px] ml-[47px] not-italic text-black_900 w-[auto]"
                    variant="body7"
                  >
                    Two years, 2
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                  <Text
                    className="font-medium mb-[1px] text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Date:
                  </Text>
                  <Text
                    className="font-normal md:ml-[100px] ml-[195px] sm:ml-[77px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-black_900 w-[auto]"
                    variant="body7"
                  >
                    Jan 12, 2023
                  </Text>
                </div>
                <CheckBox
                  className="font-light leading-[normal] ml-[19px] sm:ml-[7px] md:ml-[9px] sm:mt-[15px] md:mt-[19px] mt-[38px] sm:pl-[15px] pl-[17px] md:pl-[8px] text-[12px] text-black_900"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  name="Termsandcondi"
                  label={
                    <>
                      Terms and conditions
                      <br />
                      {
                        "I have read the terms and condition of this policy and i completely agree to the conditions and would wish to proceed with my payment... Read more>>"
                      }
                    </>
                  }
                ></CheckBox>
                <CheckBox
                  className="font-light leading-[normal] ml-[19px] sm:ml-[7px] md:ml-[9px] sm:mt-[15px] md:mt-[19px] mt-[38px] sm:pl-[15px] pl-[17px] md:pl-[8px] text-[12px] text-black_900"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  name="PrivacyPolicy"
                  label={
                    <>
                      Privacy Policy
                      <br />
                      {
                        "I have read the terms and condition of this policy and i completely agree to the conditions and would wish to proceed with my payment... Read more>>"
                      }
                    </>
                  }
                ></CheckBox>
                <CheckBox
                  className="font-light leading-[normal] ml-[19px] sm:ml-[7px] md:ml-[9px] sm:mt-[15px] md:mt-[19px] mt-[38px] sm:pl-[15px] pl-[17px] md:pl-[8px] text-[12px] text-black_900"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  name="ContractAgreem"
                  label={
                    <>
                      Contract Agreement
                      <br />
                      {
                        "I have read the terms and condition of this policy and i completely agree to the conditions and would wish to proceed with my payment... Read more>>"
                      }
                    </>
                  }
                ></CheckBox>
                <CheckBox
                  className="font-light leading-[normal] ml-[19px] sm:ml-[7px] md:ml-[9px] sm:mt-[15px] md:mt-[19px] mt-[38px] sm:pl-[15px] pl-[17px] md:pl-[8px] text-[12px] text-black_900"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  name="ReceiveNewslet"
                  label={
                    <>
                      Receive Newsletter <br />
                      {
                        "I have read the terms and condition of this policy and i completely agree to the conditions and would wish to proceed with my payment... Read more>>"
                      }
                    </>
                  }
                ></CheckBox>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[4px] sm:mt-[23px] md:mt-[30px] mt-[59px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Text
                    className="font-normal mt-[15px] sm:mt-[5px] md:mt-[7px] not-italic text-black_900 w-[auto]"
                    variant="body8"
                  >
                    Enable Auto renewal:
                  </Text>
                  <div className="bg-white_A700 border-2 border-gray_500 border-solid flex flex-col justify-start sm:mb-[2px] md:mb-[3px] mb-[7px] md:ml-[126px] ml-[245px] sm:mx-[0] sm:p-[2px] md:p-[3px] p-[6px] rounded-radius12 sm:w-[100%] w-[11%]">
                    <div className="bg-gray_500 h-[12px] sm:h-[5px] md:h-[7px] rounded-radius50 w-[12px] sm:w-[4px] md:w-[6px]"></div>
                  </div>
                </div>
                <Text
                  className="font-light leading-[normal] ml-[4px] mt-[3px] sm:mx-[0] text-black_900 sm:w-[100%] w-[92%]"
                  variant="body10"
                >
                  Choosing this options svaes your pervious payments and allows
                  for you to automatically have payment done every period. Make
                  sure to turn on this option if you wish to have it. Not all
                  paymet will be announced through emails.{" "}
                </Text>
              </div>
              <div className="flex flex-col ml-[112px] md:ml-[57px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                <Text
                  className="font-medium ml-[1px] text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Payment Plan
                </Text>
                <Text
                  className="font-normal ml-[1px] not-italic text-black_900 w-[auto]"
                  variant="body4"
                >
                  Select your preferred payment option from the dialog box
                  below:
                </Text>
                <List
                  className="font-lato gap-[163.26px] sm:gap-[65px] md:gap-[84px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-blue_55 flex flex-col items-end justify-start pl-[14px] sm:pl-[5px] md:pl-[7px] py-[14px] sm:py-[5px] md:py-[7px] w-[100%]">
                    <div className="flex flex-col justify-start mb-[19px] sm:mb-[7px] md:mb-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                        <div className="border-2 border-gray_400 border-solid md:h-[11px] h-[20px] sm:h-[8px] mt-[4px] rounded-radius50 md:w-[10px] w-[20px] sm:w-[7px]"></div>
                        <div className="flex flex-col items-center justify-start md:ml-[2px] ml-[5px] sm:mx-[0] pt-[4px] sm:px-[0] px-[4px] sm:w-[100%] w-[89%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            variant="body4"
                          >
                            Monthly Payment
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-fw leading-[18.00px] md:leading-[normal] sm:leading-[normal] md:ml-[15px] ml-[30px] mt-[2px] sm:mx-[0] text-black_900 sm:w-[100%] w-[90%]"
                        variant="body10"
                      >
                        pay monthly and not worry about budgeting thereby
                        enjoying your home
                      </Text>
                    </div>
                  </div>
                  <div className="bg-blue_55 flex flex-col items-end justify-start pl-[12px] sm:pl-[4px] md:pl-[6px] py-[12px] sm:py-[4px] md:py-[6px] w-[100%]">
                    <div className="flex flex-col justify-start md:mb-[10px] mb-[21px] sm:mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                        <div className="border-2 border-gray_400 border-solid md:h-[11px] h-[20px] sm:h-[8px] sm:mt-[2px] md:mt-[3px] mt-[6px] rounded-radius50 md:w-[10px] w-[20px] sm:w-[7px]"></div>
                        <div className="flex flex-col items-center justify-start md:ml-[3px] ml-[6px] sm:mx-[0] pt-[4px] sm:px-[0] px-[4px] sm:w-[100%] w-[89%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            variant="body4"
                          >
                            Quarterly Payment
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-fw leading-[18.00px] md:leading-[normal] sm:leading-[normal] md:ml-[16px] ml-[31px] mt-[4px] sm:mx-[0] text-black_900 sm:w-[100%] w-[90%]"
                        variant="body10"
                      >
                        pay monthly and not worry about budgeting thereby
                        enjoying your home
                      </Text>
                    </div>
                  </div>
                </List>
                <List
                  className="font-overpass gap-[163px] sm:gap-[65px] md:gap-[84px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-amber_500_66 flex flex-col items-end justify-end sm:pl-[15px] pl-[19px] md:pl-[9px] sm:py-[15px] py-[19px] md:py-[9px] w-[100%]">
                    <div className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[8px] mt-[19px] sm:mt-[7px] md:mt-[9px] sm:px-[0] w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[2px] ml-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                        <Text
                          className="font-normal not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          Annual amount:
                        </Text>
                        <Text
                          className="font-thin sm:ml-[22px] md:ml-[29px] ml-[57px] text-black_900 w-[auto]"
                          variant="body7"
                        >
                          N400,000
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[2px] ml-[5px] mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                        <Text
                          className="font-normal not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          Monthly amount:
                        </Text>
                        <Text
                          className="font-thin text-black_900 w-[auto]"
                          variant="body7"
                        >
                          N33,333.33
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[2px] ml-[5px] mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Text
                          className="font-normal not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          Forfeit Cost:
                        </Text>
                        <Text
                          className="font-thin sm:ml-[35px] md:ml-[45px] ml-[88px] text-black_900 w-[auto]"
                          variant="body7"
                        >
                          N4,999.95
                        </Text>
                      </div>
                      <Stack className="h-[19px] md:mt-[11px] mt-[22px] sm:mt-[8px] relative sm:w-[100%] w-[95%]">
                        <div className="absolute flex flex-col items-center justify-start left-[2%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                            <Text
                              className="font-normal not-italic text-black_900 w-[auto]"
                              variant="body7"
                            >
                              Final amount:{" "}
                            </Text>
                            <Text
                              className="font-thin text-black_900 w-[auto]"
                              variant="body7"
                            >
                              N38,333.28
                            </Text>
                          </div>
                        </div>
                        <Line className="absolute bg-black_900 h-[1px] inset-x-[0] mx-[auto] sm:w-[100%] w-[99%]" />
                      </Stack>
                      <Text
                        className="font-light leading-[normal] sm:mt-[28px] md:mt-[37px] mt-[72px] text-black_900_63 w-[100%]"
                        variant="body10"
                      >
                        Note that the forfeit cost is the cost you pay for
                        choosing a particular payment plan, the lesser the plan
                        the lesser the forfeit fine. thi is to help protect
                        landlords from bankruptcy and capital lost. Monthly
                        forfeit cost is 15% of the monthly cost after division.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-amber_500_66 flex flex-col items-end justify-end md:pl-[12px] sm:pl-[15px] pl-[24px] md:py-[12px] sm:py-[15px] py-[24px] w-[100%]">
                    <div className="flex flex-col justify-start mt-[14px] sm:mt-[5px] md:mt-[7px] sm:px-[0] w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                        <Text
                          className="font-normal not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          Annual amount:
                        </Text>
                        <Text
                          className="font-thin sm:ml-[22px] md:ml-[29px] ml-[57px] text-black_900 w-[auto]"
                          variant="body7"
                        >
                          N400,000
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                        <Text
                          className="font-normal not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          Quarterly amount:
                        </Text>
                        <Text
                          className="font-thin sm:ml-[14px] md:ml-[19px] ml-[37px] text-black_900 w-[auto]"
                          variant="body7"
                        >
                          N100,000
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                        <Text
                          className="font-normal not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          Forfeit Cost:
                        </Text>
                        <Text
                          className="font-thin sm:ml-[35px] md:ml-[45px] ml-[88px] text-black_900 w-[auto]"
                          variant="body7"
                        >
                          N10,0000
                        </Text>
                      </div>
                      <Line className="bg-black_900 h-[1px] sm:mt-[1px] md:mt-[2px] mt-[5px] w-[100%]" />
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                        <Text
                          className="font-normal not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          Final amount:{" "}
                        </Text>
                        <Text
                          className="font-thin sm:ml-[30px] md:ml-[39px] ml-[76px] text-black_900 w-[auto]"
                          variant="body7"
                        >
                          N110,000
                        </Text>
                      </div>
                      <Text
                        className="font-light leading-[normal] sm:mt-[29px] md:mt-[38px] mt-[75px] text-black_900_63 w-[100%]"
                        variant="body10"
                      >
                        Note that the forfeit cost is the cost you pay for
                        choosing a particular payment plan, the lesser the plan
                        the lesser the forfeit fine. thi is to help protect
                        landlords from bankruptcy and capital lost. Monthly
                        forfeit cost is 10% of the quarterly cost after
                        division.
                      </Text>
                    </div>
                  </div>
                </List>
                <List
                  className="font-lato gap-[163.26px] sm:gap-[65px] md:gap-[84px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[29px] md:mt-[38px] mt-[74px] w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-blue_55 flex flex-col items-end justify-start p-[1px] w-[100%]">
                    <div className="flex flex-col justify-start sm:mx-[0] my-[14px] sm:my-[5px] md:my-[7px] sm:px-[0] sm:w-[100%] w-[95%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                        <div className="border-2 border-gray_400 border-solid md:h-[11px] h-[20px] sm:h-[8px] sm:mt-[2px] md:mt-[3px] mt-[6px] rounded-radius50 md:w-[10px] w-[20px] sm:w-[7px]"></div>
                        <div className="flex flex-col items-center justify-start md:ml-[4px] ml-[9px] sm:mx-[0] pt-[4px] sm:px-[0] px-[4px] sm:w-[100%] w-[84%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            variant="body4"
                          >
                            Half Payment
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-fw leading-[18.00px] md:leading-[normal] sm:leading-[normal] md:ml-[17px] ml-[33px] sm:mx-[0] text-black_900 sm:w-[100%] w-[89%]"
                        variant="body10"
                      >
                        The biannual payment plan is a great option if you don’t
                        want the commitment of paying for the entire year just
                        yet
                      </Text>
                    </div>
                  </div>
                  <div className="bg-blue_55 flex flex-col items-end justify-start pl-[15px] sm:pl-[5px] md:pl-[7px] py-[15px] sm:py-[5px] md:py-[7px] w-[100%]">
                    <div className="flex flex-col justify-start mb-[18px] sm:mb-[7px] md:mb-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                        <div className="border-2 border-gray_400 border-solid md:h-[11px] h-[20px] sm:h-[8px] sm:mt-[2px] md:mt-[3px] mt-[6px] rounded-radius50 md:w-[10px] w-[20px] sm:w-[7px]"></div>
                        <div className="flex flex-col items-center justify-start ml-[12px] md:ml-[6px] sm:mx-[0] pt-[3px] sm:px-[0] px-[3px] sm:w-[100%] w-[85%]">
                          <Text
                            className="font-semibold mt-[1px] text-gray_900 w-[auto]"
                            variant="body4"
                          >
                            Yearly Payment
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-fw leading-[18.00px] md:leading-[normal] sm:leading-[normal] md:ml-[16px] ml-[31px] mt-[1px] sm:mx-[0] text-black_900 sm:w-[100%] w-[90%]"
                        variant="body10"
                      >
                        Pay your yearly rent at once so you don’t have to worry
                        about budgeting for the rest of the year!
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap font-overpass items-center justify-between sm:px-[0] w-[100%]">
                  <div className="bg-amber_500_66 flex flex-col items-end sm:mx-[0] md:pl-[11px] sm:pl-[15px] pl-[23px] md:py-[11px] sm:py-[15px] py-[23px] sm:w-[100%] w-[40%]">
                    <div className="flex flex-col justify-start mb-[1px] mt-[15px] sm:mt-[5px] md:mt-[7px] sm:px-[0] w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Text
                          className="font-normal not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          Annual amount:
                        </Text>
                        <Text
                          className="font-thin sm:ml-[22px] md:ml-[29px] ml-[57px] text-black_900 w-[auto]"
                          variant="body7"
                        >
                          N400,000
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                        <Text
                          className="font-normal not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          Monthly amount:
                        </Text>
                        <Text
                          className="font-thin sm:ml-[19px] md:ml-[25px] ml-[49px] text-black_900 w-[auto]"
                          variant="body7"
                        >
                          N200,000
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                        <Text
                          className="font-normal not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          Forfeit Cost:
                        </Text>
                        <Text
                          className="font-thin sm:ml-[35px] md:ml-[45px] ml-[88px] text-black_900 w-[auto]"
                          variant="body7"
                        >
                          N10,000
                        </Text>
                      </div>
                      <Line className="bg-black_900 h-[1px] sm:mt-[2px] md:mt-[3px] mt-[7px] w-[100%]" />
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                        <Text
                          className="font-normal not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          Final amount:{" "}
                        </Text>
                        <Text
                          className="font-thin sm:ml-[30px] md:ml-[39px] ml-[76px] text-black_900 w-[auto]"
                          variant="body7"
                        >
                          N210,000
                        </Text>
                      </div>
                      <Text
                        className="font-light leading-[normal] sm:mt-[29px] md:mt-[38px] mt-[75px] text-black_900_63 w-[100%]"
                        variant="body10"
                      >
                        Note that the forfeit cost is the cost you pay for
                        choosing a particular payment plan, the lesser the plan
                        the lesser the forfeit fine. thi is to help protect
                        landlords from bankruptcy and capital lost. Monthly
                        forfeit cost is 5% of the quarterly cost after division.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-amber_500_66 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] md:p-[12px] sm:p-[15px] p-[24px] sm:w-[100%] w-[40%]">
                    <Text
                      className="font-normal mt-[14px] sm:mt-[5px] md:mt-[7px] not-italic text-black_900 w-[auto]"
                      variant="body7"
                    >
                      Annual amount:
                    </Text>
                    <Text
                      className="font-thin md:mb-[128px] mb-[248px] sm:mb-[99px] mr-[4px] mt-[14px] sm:mt-[5px] md:mt-[7px] text-black_900 w-[auto]"
                      variant="body7"
                    >
                      N400,000
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-normal min-w-[5%] ml-[1572px] sm:ml-[627px] md:ml-[811px] sm:mt-[22px] md:mt-[28px] mt-[56px] not-italic text-[16px] text-center text-indigo_900 w-[max-content]"
              shape="RoundedBorder4"
            >
              Continue
            </Button>
            <footer className="bg-bluegray_100_7f mt-[134px] sm:mt-[53px] md:mt-[69px] w-[100%]">
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
                    onClick={handleNavigate89}
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

export default PPaymentofrentalPagePage;
