// =========  Initial
import React, { useEffect, useState } from 'react'
// ========  Antd
import { Col, Form } from 'antd'
// ======== Components
import { CustomPageFormSubTitle } from '@components/others/CustomPageTitle';
import { 
  CustomAddSelect,
  CustomInputNumber,
  CustomTextArea,
  CustomUpload,
  CustomTimePicker,
  Button,
  CustomAddMultiSelect,
  CustomMultiSelect,
  CustomCheckBox,
  CustomDateRangePicker,
  CustomRadioButton
} from '@components/form';
import { CustomRow,Flex,CustomModal } from '@components/others';
// ========= Named Components
import { SampleSmallForm } from '@modules/Example/Partials/SampleSmallForm';

export const ExampleForm = ({ FormExternalClose, formReset, formname }) => {

  // ======  Modal Open ========
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ======  Modal Title and Content ========
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  // =======  Get Selected Time =======
  const [inTime, setInTime] = useState(null)

  const [checked, setChecked] = useState('')

  const [form] = Form.useForm();      // ----- Define Form

  useEffect(() => {
    form.resetFields();
  }, [formReset])

  const categoryOption = [
    {
      label: '1st Item',
      value: '1st item'
    },
    {
      label: '2nd Item',
      value: '2nd item'
    },
    {
      label: '3rd Item',
      value: '3rd item'
    },
    {
      label: '4th Item',
      value: '4th item'
    }
  ]

  // ===== Modal Functions Start =====

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // ===== Modal Functions End =====

  const handleButtonClick = () => {
    setModalTitle("Add Category");
    setModalContent(<SampleSmallForm />);
    showModal();
  };

  const onReset = () => {
    form.resetFields();
  };

  const inTimeChange = (time) => {
    setInTime(time);
  }

  const ChangeProductId = (e) => {
    console.log(e, 'wwwwwwwwww')
  }

  const onFinish = (values) => {
    const NewValue = { ...values, Time: inTime }
    // FormExternalClose();  -->  FUTURE use for Update form Close
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleMenuClick = (e) => {
    console.log('click', e);
};

const items = [
    {
        label: '1st menu item',
        key: '1',
    },
    {
        label: '2nd menu item',
        key: '2',
        danger: true,
    },
    {
        label: '3rd menu item',
        key: '3',
        danger: true,
    },
    {
        label: '4rd menu item',
        key: '4',
        danger: true,
        disabled: true,
    },
];
const menuProps = {
    items,
    onClick: handleMenuClick,
};

  return (
    <Form
      form={form}
      name={formname}
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

      <CustomRow space={[12, 12]}>
       <Col span={24} md={12}>
          <CustomTimePicker placeholder={'dfsghosd odifhsjn'} label={'User Name'} name={'name'} />
        </Col>
        <Col span={24} md={12}>
        <CustomRadioButton rules={[
            {
              required: true,
              message: 'Please Select Image'
            }
          ]} onChange={(e)=>setChecked(e.target.value)} name={'dd'} label={'Radio'} data={categoryOption}/>
        </Col>

         <Col span={24} md={12}>
          <CustomCheckBox label={'User Name'} name={'email'} rules={[
            {
              required: true,
              message: 'Please Select Image'
            }
          ]}/>
          <CustomCheckBox label={'User Name'} name={'email'} />
        </Col>

        <Col span={24}>
          <CustomPageFormSubTitle Heading={'Customer Details'} />
        </Col>

        <Col span={24} md={12}>
          <CustomInputNumber label={'Phone Number'} placeholder={'dfsb  sdgdfs'} rules={[
            {
              required: true,
              message: 'Please Select Time'
            }
          ]} name={'phonenumber'} precision={2} />
        </Col>

        <Col span={24} md={12}>
          <CustomTextArea label={'Address'} name={'address'} />
        </Col>

        <Col span={24} md={12}>
          <CustomUpload label={'Upload'} name={'upload'} listType='picture-card' maxCount={3} accept='.png,.jpeg,.jpg'
           rules={[
            {
              required: true,
              message: 'Please Select Image'
            }
          ]} />
        </Col>

        

        <Col span={24} md={12}>
          <CustomDateRangePicker label={'Upload'} name={'Time'} onChange={inTimeChange} rules={[
            {
              required: true,
              message: 'Please Select Time'
            }
          ]} />
        </Col>
        <Col span={24} md={12}>
          <CustomTimePicker label={'Upload'} name={'Time'} onChange={inTimeChange} rules={[
            {
              required: true,
              message: 'Please Select Time'
            }
          ]} />
        </Col>

        <Col span={24} md={12}>
          <CustomAddMultiSelect placeholder={'dgdfgdf fgds'} label={'Product Category'} name={'categoryid'}
            showSearch={true}
            onButtonClick={handleButtonClick}
            onChange={ChangeProductId}
            options={categoryOption}
            rules={[
              {
                required: true,
                message: 'Please enter details!',
              },
            ]} />
        </Col>

        <Col span={24} md={12}>
          <CustomAddSelect placeholder={'dgdfgdf fgds'} label={'Product Category'} name={'categoryid'}
            showSearch={true}
            onButtonClick={handleButtonClick}
            onChange={ChangeProductId}
            options={categoryOption}
            rules={[
              {
                required: true,
                message: 'Please enter details!',
              },
            ]} />
        </Col>
        <Col span={24} md={12}>
          <CustomMultiSelect
            options={categoryOption}
            label={'Product Category'}
            name={'category'}
            placeholder={'gfhdfg'}
            rules={[
              {
                required: true,
                message: 'Please enter details!',
              },
            ]} onChange={ChangeProductId} />
        </Col>
        <Col span={24} md={12}>
        </Col>
        <Col span={24} md={12}>
        </Col>
        <Col span={24} md={12}>
        </Col>

      </CustomRow>

      <Flex gap={'20px'} center={"true"} margin={'20px 0'}>
        <Button.Success text={'Submit'} htmlType={'submit'} />
        <Button.Danger text={'cancel'} onClick={() => onReset()} />
      </Flex>

      <CustomModal isVisible={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} width={800} modalTitle={modalTitle} modalContent={modalContent} />
    </Form>
  )
}
