import React, { useEffect } from "react";
import { StyledFilterList } from "../style";
import { SvgIcons } from "@assets/images";
import { CustomRadioButton } from "@components/form";
import { Form } from "antd";

export const FilterList = ({ brand, setProductsList, productsList }) => {
  const [form] = Form.useForm(); // Define Form

  const filterDuplicates = (data) => {
    const seen = new Set();
    return data.filter((item) => {
      const isDuplicate = seen.has(item.value);
      seen.add(item.value);
      return !isDuplicate;
    });
  };

  const datas = brand?.productDetails
    ? filterDuplicates(
        brand.productDetails.map((item) => ({
          label: item.brandName,
          value: item.brandId,
        }))
      )
    : [];

    console.log(datas,'datas');

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setProductsList(selectedValue);
    console.log(selectedValue, "selectedValue");
  };

  useEffect(() => {
    if (productsList) {
      form.setFieldsValue({ productname: productsList });
    }
  }, [productsList, form]);

  const onFinish = (value) => {
    console.log(value);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="form"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <StyledFilterList>
        <div className="filterBtn">
          <div>
            <img className="filter" src={SvgIcons.Filter} alt="Filter" title="Filter" />
            <span className="filterText">Filter</span>
          </div>
        </div>
        <div className="filterContainer">
          <h2 className="contentHeading">All Brands</h2>
          <CustomRadioButton
            data={datas}
            name="productname"
            onChange={handleChange}
          />
        </div>
      </StyledFilterList>
    </Form>
  );
};
