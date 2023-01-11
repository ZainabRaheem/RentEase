import React from "react";

import {
  Stack,
  Img,
  Text,
  Grid,
  Radio,
  SelectBox,
  Input,
  Button,
  List,
  Line,
} from "components";
import { useNavigate } from "react-router-dom";

const PPaymentPlanPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate52() {
    navigate("/calculatorpage");
  }
  function handleNavigate53() {
    navigate("/contactuspage");
  }
  function handleNavigate54() {
    navigate("/profilepage");
  }
  function handleNavigate55() {
    navigate("/profilepage");
  }
  function handleNavigate58() {
    navigate("/");
  }
  function handleNavigate59() {
    navigate("/aboutuspage");
  }
  function handleNavigate60() {
    navigate("/propertiespage");
  }
  function handleNavigate87() {
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
                <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato md:ml-[162px] ml-[314px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%] common-row-list">
                  <ul className="flex flex-row items-center justify-center">
                    <li className="w-[8%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:my-[22px] flex-col flex my-[43px]">
                      <div className="flex flex-col items-center justify-start">
                        <a
                          href={"javascript:"}
                          className="common-pointer cursor-pointer font-normal not-italic text-black_901 w-[auto]"
                          variant="body8"
                          onClick={handleNavigate58}
                          rel="noreferrer"
                        >
                          Home
                        </a>
                      </div>
                    </li>
                    <li className="w-[16%] ml-[63px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[32px] flex-col flex">
                      <div
                        className="common-pointer flex flex-col items-center justify-start p-[12px] sm:p-[4px] md:p-[6px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0]"
                        onClick={handleNavigate59}
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
                        onClick={handleNavigate60}
                        rel="noreferrer"
                      >
                        Properties
                      </a>
                    </li>
                    <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                      <a
                        href={"javascript:"}
                        className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901"
                        onClick={handleNavigate52}
                        rel="noreferrer"
                      >
                        Calculator
                      </a>
                    </li>
                    <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                      <a
                        href={"javascript:"}
                        className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901"
                        onClick={handleNavigate53}
                        rel="noreferrer"
                      >
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
                <Stack className="border-bw15 border-solid border-white_A700 h-[55px] ml-[171px] sm:ml-[68px] md:ml-[88px] p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] relative rounded-radius15 w-[22%]">
                  <Img
                    src="images/img_menu_22X31.svg"
                    className="absolute h-[22px] inset-y-[0] max-w-[100%] my-[auto] right-[8%] w-[9%]"
                    alt="menu"
                  />
                </Stack>
              </div>
            </div>
          </header>
          <div className="flex flex-col justify-start mt-[181px] sm:mt-[72px] md:mt-[93px] w-[100%]">
            <Text
              className="font-lato font-light sm:ml-[153px] md:ml-[198px] ml-[385px] text-black_900_aa w-[auto]"
              variant="body8"
            >
              {"Profile > account > Payment Plan"}
            </Text>
            <Text
              className="font-medium font-overpass sm:ml-[151px] md:ml-[195px] ml-[379px] sm:mt-[17px] md:mt-[23px] mt-[45px] text-black_900 w-[auto]"
              as="h5"
              variant="h5"
            >
              Payment Plan
            </Text>
            <Text
              className="font-normal font-overpass sm:ml-[151px] md:ml-[195px] ml-[379px] mt-[14px] sm:mt-[5px] md:mt-[7px] not-italic text-black_900 w-[auto]"
              variant="body4"
            >
              Your preferred payment option
            </Text>
            <Grid className="font-lato md:gap-[122px] gap-[237px] sm:gap-[94px] grid sm:grid-cols-1 grid-cols-2 max-w-[1193px] min-h-[auto] sm:ml-[151px] md:ml-[196px] ml-[auto] mr-[auto] mt-[13px] sm:mt-[5px] md:mt-[6px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
              <div className="bg-blue_55 flex flex-col justify-start p-[14px] sm:p-[5px] md:p-[7px] w-[100%]">
                <Radio
                  value="MonthlyPayment"
                  className="font-semibold sm:ml-[1px] md:ml-[2px] ml-[5px] md:mr-[113px] mr-[219px] sm:mr-[87px] sm:pl-[3px] md:pl-[4px] pl-[8px] pr-[4px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  checked={true}
                  name="Label"
                  label="Monthly Payment"
                  variant="OutlineIndigo400"
                ></Radio>
                <Text
                  className="font-normal sm:mb-[15px] md:mb-[19px] mb-[38px] sm:ml-[15px] md:ml-[19px] ml-[38px] mt-[4px] not-italic text-black_900 w-[auto]"
                  variant="body10"
                >
                  Amount: N38,333.28
                </Text>
              </div>
              <div className="bg-gray_303 flex flex-col justify-center p-[13px] sm:p-[5px] md:p-[6px] w-[100%]">
                <Radio
                  value="QuarterlyPayment"
                  className="font-semibold md:mr-[111px] mr-[216px] sm:mr-[86px] mt-[1px] sm:pl-[3px] md:pl-[4px] pl-[8px] pr-[4px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  checked={false}
                  name="LabelOne"
                  label="Quarterly Payment"
                ></Radio>
                <Text
                  className="font-fw leading-[18.00px] md:leading-[normal] sm:leading-[normal] md:mb-[10px] mb-[20px] sm:mb-[7px] md:ml-[20px] ml-[39px] mr-[145px] md:mr-[74px] sm:mx-[0] text-black_900 sm:w-[100%] w-[60%]"
                  variant="body10"
                >
                  pay monthly and not worry about budgeting thereby enjoying
                  your home
                </Text>
              </div>
              <div className="bg-gray_303 flex flex-col justify-center p-[13px] sm:p-[5px] md:p-[6px] w-[100%]">
                <Radio
                  value="HalfPayment"
                  className="font-semibold sm:mr-[108px] md:mr-[139px] mr-[271px] mt-[1px] sm:pl-[3px] md:pl-[4px] pl-[8px] pr-[4px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  checked={false}
                  name="LabelTwo"
                  label="Half Payment"
                ></Radio>
                <Text
                  className="font-fw leading-[18.00px] md:leading-[normal] sm:leading-[normal] md:mb-[10px] mb-[20px] sm:mb-[7px] md:ml-[16px] ml-[32px] mr-[150px] md:mr-[77px] sm:mx-[0] text-black_900 sm:w-[100%] w-[60%]"
                  variant="body10"
                >
                  pay monthly and not worry about budgeting thereby enjoying
                  your home
                </Text>
              </div>
              <div className="bg-gray_303 flex flex-col justify-center p-[13px] sm:p-[5px] md:p-[6px] w-[100%]">
                <Radio
                  value="YearlyPayment"
                  className="font-semibold sm:mr-[101px] md:mr-[130px] mr-[253px] mt-[1px] sm:pl-[2px] md:pl-[3px] pl-[7px] pr-[4px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  checked={false}
                  name="LabelThree"
                  label="Yearly Payment"
                ></Radio>
                <Text
                  className="font-fw leading-[18.00px] md:leading-[normal] sm:leading-[normal] md:mb-[10px] mb-[20px] sm:mb-[7px] md:ml-[20px] ml-[39px] mr-[145px] md:mr-[74px] sm:mx-[0] text-black_900 sm:w-[100%] w-[60%]"
                  variant="body10"
                >
                  Choose this plan to avoid the stress of budgeting and fully
                  enjoy your house.
                </Text>
              </div>
            </Grid>
            <Text
              className="font-normal font-overpass sm:ml-[151px] md:ml-[195px] ml-[378px] md:mt-[11px] mt-[22px] sm:mt-[8px] not-italic text-black_900 w-[auto]"
              variant="body4"
            >
              <span className="text-black_900 text-[24px] sm:text-[20px] md:text-[22px]">
                Current Payment Mode:
              </span>
              <span className="text-black_900 text-[24px] font-thin sm:text-[20px] md:text-[22px]">
                {" "}
                Bank Transfer
              </span>
            </Text>
            <Text
              className="font-normal font-overpass sm:ml-[151px] md:ml-[195px] ml-[378px] sm:mt-[21px] md:mt-[27px] mt-[53px] not-italic text-black_900 w-[auto]"
              variant="body4"
            >
              Change Payment Mode:
            </Text>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-overpass items-center max-w-[863px] md:ml-[195px] ml-[auto] mr-[auto] sm:mt-[10px] md:mt-[13px] mt-[27px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-normal not-italic text-black_900 w-[auto]"
                variant="body8"
              >
                Select Payment Mode:
              </Text>
              <Radio
                value="CardDetails"
                className="font-normal sm:ml-[31px] md:ml-[40px] ml-[79px] not-italic pl-[14px] sm:pl-[5px] md:pl-[7px] text-[16px] text-black_900"
                inputClassName="h-[20px] mr-[5px] w-[20px]"
                checked={false}
                name="CardDetails"
                label="Card Details "
                size="md"
                variant="OutlineGray400"
              ></Radio>
              <div className="border-2 border-gray_400 border-solid md:h-[11px] h-[20px] sm:h-[8px] sm:ml-[141px] md:ml-[182px] ml-[353px] rounded-radius50 md:w-[10px] w-[20px] sm:w-[7px]"></div>
              <div className="flex flex-col items-center ml-[16px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                <Text
                  className="font-normal not-italic text-black_900 w-[auto]"
                  variant="body8"
                >
                  Third Party App
                </Text>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center max-w-[1193px] md:ml-[196px] ml-[auto] mr-[auto] sm:mt-[2px] md:mt-[3px] mt-[7px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <SelectBox
                className="font-normal font-overpass md:mb-[10px] mb-[20px] sm:mb-[7px] sm:mt-[1px] md:mt-[2px] mt-[5px] sm:mx-[0] not-italic text-[20px] text-black_900 sm:w-[100%] w-[17%]"
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
              <Input
                className="font-lato font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                wrapClassName="md:ml-[20px] md:mt-[2px] ml-[39px] mt-[5px] sm:mt-[1px] sm:mx-[0] sm:w-[100%] w-[38%]"
                type="number"
                name="Frame174"
                placeholder="Number"
              ></Input>
              <SelectBox
                className="font-normal font-overpass mb-[17px] sm:mb-[6px] md:mb-[8px] md:ml-[16px] ml-[31px] sm:mt-[1px] md:mt-[2px] mt-[5px] sm:mx-[0] not-italic text-[20px] text-black_900 sm:w-[100%] w-[18%]"
                placeholderClassName="text-black_900"
                name="Simplee"
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
                size="md"
              ></SelectBox>
              <Stack className="h-[80px] sm:ml-[13px] md:ml-[17px] ml-[34px] relative w-[20%]">
                <div className="absolute flex flex-col font-manrope justify-start left-[0] sm:mx-[0] pb-[1px] sm:px-[0] px-[1px] top-[0] sm:w-[100%] w-[91%]">
                  <Text
                    className="font-medium sm:mb-[20px] md:mb-[26px] mb-[52px] text-bluegray_700 w-[auto]"
                    variant="body8"
                  >
                    Identity Number
                  </Text>
                </div>
                <Input
                  className="absolute bottom-[0] font-lato font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                  wrapClassName="absolute w-[100%]"
                  type="number"
                  name="Frame172"
                  placeholder="Number"
                ></Input>
              </Stack>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center justify-end max-w-[953px] ml-[auto] mr-[auto] sm:mt-[3px] md:mt-[4px] mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                wrapClassName="sm:mx-[0] sm:w-[100%] w-[24%]"
                type="number"
                name="Frame173"
                placeholder="Number"
              ></Input>
              <Button
                className="cursor-pointer font-normal min-w-[11%] ml-[13px] sm:ml-[5px] md:ml-[6px] not-italic text-[18px] text-center text-gray_400 w-[max-content]"
                shape="RoundedBorder15"
                size="md"
                variant="OutlineGray400"
              >
                MM/YY
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[8%] sm:ml-[13px] md:ml-[17px] ml-[34px] not-italic text-[18px] text-center text-gray_400 w-[max-content]"
                shape="RoundedBorder15"
                size="md"
                variant="OutlineGray400"
              >
                CVV
              </Button>
              <Stack className="h-[80px] sm:ml-[109px] md:ml-[140px] ml-[273px] relative w-[25%]">
                <div className="absolute flex flex-col font-manrope justify-start left-[0] sm:mx-[0] pb-[1px] sm:px-[0] px-[1px] top-[0] sm:w-[100%] w-[94%]">
                  <Text
                    className="font-medium sm:mb-[21px] md:mb-[27px] mb-[53px] text-bluegray_700 w-[auto]"
                    variant="body8"
                  >
                    MM/YY
                  </Text>
                </div>
                <Input
                  className="absolute bottom-[0] font-lato font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                  wrapClassName="absolute w-[100%]"
                  name="Frame172 One"
                  placeholder="MM/YY"
                ></Input>
              </Stack>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start justify-end max-w-[918px] ml-[auto] mr-[auto] sm:mt-[3px] md:mt-[4px] mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-light sm:mt-[2px] md:mt-[3px] mt-[7px] text-black_900 w-[auto]"
                variant="body10"
              >
                Please provide your card details
              </Text>
              <Text
                className="font-light sm:mb-[2px] md:mb-[3px] mb-[7px] sm:ml-[236px] md:ml-[306px] ml-[593px] text-black_900 w-[auto]"
                variant="body10"
              >
                Please provide your card details
              </Text>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-overpass items-end max-w-[825px] md:ml-[197px] ml-[auto] mr-[auto] sm:mt-[23px] md:mt-[30px] mt-[59px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-normal mt-[10px] sm:mt-[3px] md:mt-[5px] not-italic text-black_900 w-[auto]"
                variant="body8"
              >
                Enable Auto renewal:
              </Text>
              <div className="bg-white_A700 border-2 border-gray_500 border-solid flex flex-col justify-start mb-[2px] md:ml-[323px] ml-[626px] sm:mx-[0] sm:p-[2px] md:p-[3px] p-[6px] rounded-radius12 sm:w-[100%] w-[6%]">
                <div className="bg-gray_500 h-[12px] sm:h-[5px] md:h-[7px] rounded-radius50 w-[12px] sm:w-[4px] md:w-[6px]"></div>
              </div>
            </div>
            <Text
              className="font-light font-overpass leading-[normal] md:ml-[197px] ml-[383px] mt-[3px] sm:mx-[0] text-black_900 sm:w-[100%] w-[44%]"
              variant="body10"
            >
              Choosing this options svaes your pervious payments and allows for
              you to automatically have payment done every period. Make sure to
              turn on this option if you wish to have it. Not all paymet will be
              announced through emails.{" "}
            </Text>
            <Text
              className="font-normal font-overpass sm:ml-[153px] md:ml-[197px] ml-[383px] sm:mt-[13px] md:mt-[18px] mt-[35px] not-italic text-black_900 w-[auto]"
              variant="body8"
            >
              Billing History
            </Text>
            <div className="bg-bluegray_100 flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start max-w-[922px] md:ml-[195px] ml-[auto] md:mr-[318px] mr-[auto] md:mt-[11px] mt-[23px] sm:mt-[9px] sm:mx-[0] pb-[15px] sm:pb-[5px] md:pb-[7px] sm:pl-[15px] sm:pr-[15px] pr-[15px] md:pr-[7px] w-[100%]">
              <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[4%]">
                <Text
                  className="font-extrabold text-indigo_900 w-[auto]"
                  variant="body8"
                >
                  Date
                </Text>
              </div>
              <Text
                className="font-extrabold md:ml-[126px] ml-[245px] sm:ml-[97px] text-black_902 w-[auto]"
                variant="body8"
              >
                Price
              </Text>
              <Text
                className="font-extrabold ml-[154px] sm:ml-[61px] md:ml-[79px] text-black_902 w-[auto]"
                variant="body8"
              >
                period{" "}
              </Text>
              <Text
                className="font-extrabold sm:ml-[101px] md:ml-[130px] ml-[253px] text-black_902 w-[auto]"
                variant="body8"
              >
                Download
              </Text>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start max-w-[819px] md:ml-[197px] ml-[auto] mr-[auto] sm:mt-[3px] md:mt-[4px] mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col items-center justify-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                <Text
                  className="font-medium text-indigo_900 w-[auto]"
                  variant="body8"
                >
                  Dec 1, 2020
                </Text>
              </div>
              <Text
                className="font-normal ml-[184px] sm:ml-[73px] md:ml-[94px] not-italic text-black_902 w-[auto]"
                variant="body8"
              >
                N10
              </Text>
              <Text
                className="font-normal ml-[178px] sm:ml-[71px] md:ml-[91px] mt-[1px] not-italic text-black_902 w-[auto]"
                variant="body8"
              >
                period 1
              </Text>
              <Text
                className="font-normal md:ml-[118px] ml-[229px] sm:ml-[91px] mt-[1px] not-italic text-indigo_600 w-[auto]"
                variant="body8"
              >
                Invoice
              </Text>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-start max-w-[819px] md:ml-[197px] ml-[auto] mr-[auto] sm:mt-[31px] md:mt-[40px] mt-[78px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                <Text
                  className="font-medium text-indigo_900 w-[auto]"
                  variant="body8"
                >
                  Jan 1, 2021
                </Text>
              </div>
              <Text
                className="font-normal ml-[189px] sm:ml-[75px] md:ml-[97px] not-italic text-black_902 w-[auto]"
                variant="body8"
              >
                N10
              </Text>
              <Text
                className="font-normal ml-[178px] sm:ml-[71px] md:ml-[91px] mt-[1px] not-italic text-black_902 w-[auto]"
                variant="body8"
              >
                Period 2
              </Text>
              <Text
                className="font-normal md:ml-[118px] ml-[229px] sm:ml-[91px] mt-[1px] not-italic text-indigo_600 w-[auto]"
                variant="body8"
              >
                Invoice
              </Text>
            </div>
            <List
              className="font-lato sm:gap-[22px] md:gap-[28px] gap-[55.56px] grid max-w-[819px] min-h-[auto] sm:ml-[153px] md:ml-[197px] ml-[auto] mr-[auto] sm:mt-[31px] md:mt-[40px] mt-[78px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end w-[100%]">
                <div className="flex flex-col items-center justify-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                  <Text
                    className="font-medium text-indigo_900 w-[auto]"
                    variant="body8"
                  >
                    Feb 1, 2021
                  </Text>
                </div>
                <Text
                  className="font-normal ml-[187px] sm:ml-[74px] md:ml-[96px] not-italic text-black_902 w-[auto]"
                  variant="body8"
                >
                  N10
                </Text>
                <Text
                  className="font-normal ml-[178px] sm:ml-[71px] md:ml-[91px] mt-[1px] not-italic text-black_902 w-[auto]"
                  variant="body8"
                >
                  period 3
                </Text>
                <Text
                  className="font-normal md:ml-[118px] ml-[229px] sm:ml-[91px] mt-[1px] not-italic text-indigo_600 w-[auto]"
                  variant="body8"
                >
                  Invoice
                </Text>
              </div>
              <Line className="self-center w-[74%] h-[1.5px] sm:w-[100%] bg-black_902" />
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end w-[100%]">
                <div className="flex flex-col items-center justify-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                  <Text
                    className="font-medium text-indigo_900 w-[auto]"
                    variant="body8"
                  >
                    Mar 1, 2020
                  </Text>
                </div>
                <Text
                  className="font-normal ml-[184px] sm:ml-[73px] md:ml-[94px] not-italic text-black_902 w-[auto]"
                  variant="body8"
                >
                  N10
                </Text>
                <Text
                  className="font-normal ml-[178px] sm:ml-[71px] md:ml-[91px] mt-[1px] not-italic text-black_902 w-[auto]"
                  variant="body8"
                >
                  period 1
                </Text>
                <Text
                  className="font-normal md:ml-[118px] ml-[229px] sm:ml-[91px] mt-[1px] not-italic text-indigo_600 w-[auto]"
                  variant="body8"
                >
                  Invoice
                </Text>
              </div>
            </List>
            <List
              className="font-lato sm:gap-[31px] md:gap-[40px] gap-[78.42px] grid max-w-[819px] min-h-[auto] sm:ml-[153px] md:ml-[197px] ml-[auto] mr-[auto] sm:mt-[31px] md:mt-[40px] mt-[78px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end w-[100%]">
                <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                  <Text
                    className="font-medium text-indigo_900 w-[auto]"
                    variant="body8"
                  >
                    Apr 1, 2021
                  </Text>
                </div>
                <Text
                  className="font-normal ml-[188px] sm:ml-[75px] md:ml-[97px] not-italic text-black_902 w-[auto]"
                  variant="body8"
                >
                  N10
                </Text>
                <Text
                  className="font-normal ml-[178px] sm:ml-[71px] md:ml-[91px] mt-[1px] not-italic text-black_902 w-[auto]"
                  variant="body8"
                >
                  Period 2
                </Text>
                <Text
                  className="font-normal md:ml-[118px] ml-[229px] sm:ml-[91px] mt-[1px] not-italic text-indigo_600 w-[auto]"
                  variant="body8"
                >
                  Invoice
                </Text>
              </div>
              <Line className="self-center w-[74%] h-[1.5px] sm:w-[100%] bg-black_902" />
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end w-[100%]">
                <div className="flex flex-col items-center justify-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                  <Text
                    className="font-medium text-indigo_900 w-[auto]"
                    variant="body8"
                  >
                    May 1, 2021
                  </Text>
                </div>
                <Text
                  className="font-normal ml-[183px] sm:ml-[73px] md:ml-[94px] not-italic text-black_902 w-[auto]"
                  variant="body8"
                >
                  N10
                </Text>
                <Text
                  className="font-normal ml-[178px] sm:ml-[71px] md:ml-[91px] mt-[1px] not-italic text-black_902 w-[auto]"
                  variant="body8"
                >
                  period 3
                </Text>
                <Text
                  className="font-normal md:ml-[118px] ml-[229px] sm:ml-[91px] mt-[1px] not-italic text-indigo_600 w-[auto]"
                  variant="body8"
                >
                  Invoice
                </Text>
              </div>
            </List>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1254px] md:ml-[147px] ml-[auto] mr-[auto] sm:mt-[11px] md:mt-[15px] mt-[30px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Img
                src="images/img_arrowleft.svg"
                className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                alt="arrowleft"
              />
              <a
                href={"javascript:"}
                className="common-pointer font-normal font-overpass sm:ml-[3px] md:ml-[4px] ml-[8px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-[16px] text-indigo_400 underline w-[auto]"
                onClick={handleNavigate55}
                rel="noreferrer"
              >
                Back to account{" "}
              </a>
              <Button
                className="cursor-pointer font-lato font-normal min-w-[10%] sm:ml-[350px] md:ml-[453px] ml-[878px] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-[16px] text-center text-white_A700 w-[max-content]"
                shape="RoundedBorder4"
                variant="FillIndigo400"
              >
                Save Change{" "}
              </Button>
              <Button
                className="common-pointer cursor-pointer font-lato font-normal min-w-[6%] sm:ml-[15px] md:ml-[20px] ml-[40px] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-[16px] text-center text-indigo_400 w-[max-content]"
                onClick={handleNavigate54}
                shape="RoundedBorder4"
                variant="OutlineIndigo400_2"
              >
                Cancel
              </Button>
            </div>
            <footer className="bg-bluegray_100_7f font-overpass mt-[165px] sm:mt-[65px] md:mt-[85px] w-[100%]">
              <div className="flex flex-col justify-start max-w-[1804px] sm:mb-[19px] md:mb-[25px] mb-[49px] md:ml-[46px] ml-[auto] md:mr-[12px] mr-[auto] sm:mt-[15px] md:mt-[20px] mt-[40px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
                    onClick={handleNavigate87}
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

export default PPaymentPlanPagePage;
