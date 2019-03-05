<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Credit Card</strong> <small>Form</small>
          </div>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="name">
                  Name
                </label>
                <b-form-input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="ccnumber">
                  Credit Card Number
                </label>
                <b-form-input
                  id="ccnumber"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group>
                <label for="month1">
                  Month
                </label>
                <b-form-select
                  id="month1"
                  :plain="true"
                  :options="[1,2,3,4,5,6,7,8,9,10,11,12]"
                />
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label for="year1">
                  Year
                </label>
                <b-form-select
                  id="year1"
                  :plain="true"
                  :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]"
                />
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label for="cvv">
                  CVV/CVC
                </label>
                <b-form-input
                  id="cvv"
                  type="text"
                  placeholder="123"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Company</strong> <small>Form</small>
          </div>
          <b-form-group>
            <label for="company">
              Company
            </label>
            <b-form-input
              id="company"
              type="text"
              placeholder="Enter your company name"
            />
          </b-form-group>
          <b-form-group>
            <label for="vat">
              VAT
            </label>
            <b-form-input
              id="vat"
              type="text"
              placeholder="PL1234567890"
            />
          </b-form-group>
          <b-form-group>
            <label for="street">
              Street
            </label>
            <b-form-input
              id="street"
              type="text"
              placeholder="Enter street name"
            />
          </b-form-group>
          <b-row>
            <b-col sm="8">
              <b-form-group>
                <label for="city">
                  City
                </label>
                <b-form-input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                />
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label for="postal-code">
                  Postal Code
                </label>
                <b-form-input
                  id="postal-code"
                  type="text"
                  placeholder="Postal Code"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-group>
            <label for="country">
              Country
            </label>
            <b-form-input
              id="country"
              type="text"
              placeholder="Country name"
            />
          </b-form-group>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Basic Form</strong> Elements
          </div>
          <b-form-group
            :label-cols="3"
            description="Let us know your full name."
            label="Enter your name"
            label-for="basicName"
          >
            <b-form-input
              id="basicName"
              type="text"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Static"
            label-for="basicStatic"
          >
            <b-form-input
              id="basicStatic"
              plaintext
              type="text"
              value="Username"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            description="This is a help text"
            label="Text Input"
            label-for="basicText"
          >
            <b-form-input
              id="basicText"
              type="text"
              placeholder="Text"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Date"
            label-for="date"
          >
            <b-form-input
              id="date"
              type="date"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Datepicker"
          >
            <b-datepicker
              v-model="datepicker"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            description="Please enter your email"
            label="Email Input"
            label-for="basicEmail"
          >
            <b-form-input
              id="basicEmail"
              type="email"
              placeholder="Enter your email"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            description="Please enter a complex password"
            label="Password Input"
            label-for="basicPassword"
          >
            <b-form-input
              id="basicPassword"
              type="password"
              placeholder="Enter your password"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Disabled Input"
            label-for="basicInputDisabled"
          >
            <b-form-input
              id="basicInputDisabled"
              :disabled="true"
              type="text"
              placeholder="Disabled"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Textarea"
            label-for="basicTextarea"
          >
            <b-form-input
              id="basicTextarea"
              :textarea="true"
              :rows="9"
              placeholder="Content.."
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Select"
            label-for="basicSelect"
          >
            <b-form-select
              id="basicSelect"
              :plain="true"
              :options="['Please select','Option 1', 'Option 2', 'Option 3']"
              value="Please select"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Select large"
            label-for="basicSelectLg"
          >
            <b-form-select
              id="basicSelectLg"
              :plain="true"
              :options="['Please select','Option 1', 'Option 2', 'Option 3']"
              size="lg"
              value="Please select"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Select small"
            label-for="basicSelectSm"
          >
            <b-form-select
              id="basicSelectSm"
              :plain="true"
              :options="['Please select','Option 1', 'Option 2', 'Option 3']"
              size="sm"
              value="Please select"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Disabled select"
            label-for="basicSelectDisabled"
          >
            <b-form-select
              id="basicSelectDisabled"
              :plain="true"
              :options="['Please select','Option 1', 'Option 2', 'Option 3']"
              :disabled="true"
              value="Please select"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Select"
            label-for="basicMultiSelect"
          >
            <b-form-select
              id="basicMultiSelect"
              :plain="true"
              :multiple="true"
              :options="[
                {
                  text: 'Please select some item',
                  value: null
                },
                {
                  text: 'This is First option',
                  value: 'a'
                }, {
                  text: 'Default Selected Option',
                  value: 'b'
                }, {
                  text: 'This is another option',
                  value: 'c'
                }, {
                  text: 'This one is disabled',
                  value: 'd',
                  disabled: true
                }]"
              :value="[null,'c']"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Select"
            label-for="basicMultiSelect"
          >
            <b-select-2
              id="basicMultiSelect"
              v-model="select2"
              :options="[
                {
                  text: 'This is First option',
                  value: 'a'
                }, {
                  text: 'Default Selected Option',
                  value: 'b'
                }, {
                  text: 'This is another option',
                  value: 'c'
                }, {
                  text: 'This one is disabled',
                  value: 'd',
                  disabled: true
                }]"
              placeholder="Please select some item"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Radios"
            label-for="basicRadios"
          >
            <b-form-radio-group
              id="basicRadios"
              :plain="true"
              :options="[
                {text: 'Option 1 ',value: '1'},
                {text: 'Option 2 ',value: '2'},
                {text: 'Option 3 ',value: '3'}
              ]"
              checked="2"
              stacked
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Inline radios"
            label-for="basicInlineRadios"
          >
            <b-form-radio-group
              id="basicInlineRadios"
              :plain="true"
              :options="[
                {text: 'Option 1 ',value: '1'},
                {text: 'Option 2 ',value: '2'},
                {text: 'Option 3 ',value: '3'}
              ]"
              :checked="3"
            />
          </b-form-group>

          <b-form-group
            :label-cols="3"
            label="Checkboxes"
            label-for="basicCheckboxes"
          >
            <b-form-checkbox-group
              id="basicCheckboxes"
              :plain="true"
              :checked="[2,3]"
              stacked
              name="Checkboxes"
            >
              <b-form-checkbox value="1">
                Option 1
              </b-form-checkbox>
              <b-form-checkbox value="2">
                Option 2
              </b-form-checkbox>
              <b-form-checkbox value="3">
                Option 3
              </b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Inline checkboxes"
            label-for="basicInlineCheckboxes"
          >
            <b-form-checkbox-group
              id="basicInlineCheckboxes"
              :plain="true"
              :checked="[1,3]"
              name="InlineCheckboxes"
            >
              <b-form-checkbox
                :plain="true"
                value="1"
              >
                Option 1
              </b-form-checkbox>
              <b-form-checkbox
                :plain="true"
                value="2"
              >
                Option 2
              </b-form-checkbox>
              <b-form-checkbox
                :plain="true"
                value="3"
              >
                Option 3
              </b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <!--custom controls - radios/checkboxes - temporary fix-->
          <b-form-group
            :label-cols="3"
            label="Radios - custom"
            label-for="basicRadiosCustom"
          >
            <b-form-radio-group
              id="basicRadiosCustom"
              value="1"
              stacked
            >
              <div class="custom-control custom-radio">
                <input
                  id="customRadio1"
                  type="radio"
                  name="customRadio"
                  class="custom-control-input"
                  value="1"
                >
                <label
                  class="custom-control-label"
                  for="customRadio1"
                >
                  Option 1
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="customRadio2"
                  type="radio"
                  name="customRadio"
                  class="custom-control-input"
                  value="2"
                  checked
                >
                <label
                  class="custom-control-label"
                  for="customRadio2"
                >
                  Option 2
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="customRadio3"
                  type="radio"
                  name="customRadio"
                  class="custom-control-input"
                  value="3"
                >
                <label
                  class="custom-control-label"
                  for="customRadio3"
                >
                  Option 3
                </label>
              </div>
            </b-form-radio-group>
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Inline radios - custom"
            label-for="basicCustomRadios1"
          >
            <b-form-radio-group
              id="basicCustomRadios1"
              name="customRadioInline1"
            >
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  id="customRadioInline1"
                  type="radio"
                  name="customRadioInline1"
                  class="custom-control-input"
                  value="1"
                >
                <label
                  class="custom-control-label"
                  for="customRadioInline1"
                >
                  Option 1
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  id="customRadioInline2"
                  type="radio"
                  name="customRadioInline1"
                  class="custom-control-input"
                  value="2"
                  checked
                >
                <label
                  class="custom-control-label"
                  for="customRadioInline2"
                >
                  Option 2
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  id="customRadioInline3"
                  type="radio"
                  name="customRadioInline1"
                  class="custom-control-input"
                  value="3"
                >
                <label
                  class="custom-control-label"
                  for="customRadioInline3"
                >
                  Option 3
                </label>
              </div>
            </b-form-radio-group>
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Checkboxes - custom"
            label-for="basicCustomCheckboxes"
          >
            <b-form-checkbox-group
              id="basicCustomCheckboxes"
              stacked
            >
              <div class="custom-control custom-checkbox">
                <input
                  id="customChk1"
                  type="checkbox"
                  class="custom-control-input"
                  value="1"
                  checked
                >
                <label
                  class="custom-control-label"
                  for="customChk1"
                >
                  Option 1
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  id="customChk2"
                  type="checkbox"
                  class="custom-control-input"
                  value="2"
                >
                <label
                  class="custom-control-label"
                  for="customChk2"
                >
                  Option 2
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  id="customChk3"
                  type="checkbox"
                  class="custom-control-input"
                  value="3"
                >
                <label
                  class="custom-control-label"
                  for="customChk3"
                >
                  Option 3
                </label>
              </div>
            </b-form-checkbox-group>
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Inline checkboxes - custom"
            label-for="basicInlineCustomCheckboxes"
          >
            <b-form-checkbox-group id="basicInlineCustomCheckboxes">
              <div class="custom-control custom-checkbox custom-control-inline">
                <input
                  id="customInChk1"
                  type="checkbox"
                  class="custom-control-input"
                  value="1"
                >
                <label
                  class="custom-control-label"
                  for="customInChk1"
                >
                  Option 1
                </label>
              </div>
              <div class="custom-control custom-checkbox custom-control-inline">
                <input
                  id="customInChk2"
                  type="checkbox"
                  class="custom-control-input"
                  value="2"
                  checked
                >
                <label
                  class="custom-control-label"
                  for="customInChk2"
                >
                  Option 2
                </label>
              </div>
              <div class="custom-control custom-checkbox custom-control-inline">
                <input
                  id="customInChk3"
                  type="checkbox"
                  class="custom-control-input"
                  value="3"
                >
                <label
                  class="custom-control-label"
                  for="customInChk3"
                >
                  Option 3
                </label>
              </div>
            </b-form-checkbox-group>
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="File input"
            label-for="fileInput"
          >
            <b-form-file
              id="fileInput"
              :plain="true"
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Multiple file input"
            label-for="fileInputMulti"
          >
            <b-form-file
              id="fileInputMulti"
              :plain="true"
              :multiple="true"
            />
          </b-form-group>
          <div slot="footer">
            <b-button
              type="submit"
              size="sm"
              variant="primary"
            >
              <i class="fa fa-dot-circle-o" /> Submit
            </b-button>
            <b-button
              type="reset"
              size="sm"
              variant="danger"
            >
              <i class="fa fa-ban" /> Reset
            </b-button>
          </div>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Inline</strong> Form
          </div>
          <!-- Bootstrap Vue has some problems with Inline forms that's why we use some standard bootstrap classes -->
          <b-form inline>
            <label
              class="mr-sm-2"
              for="inlineInput1"
            >
              Name:
            </label>
            <b-input
              id="inlineInput1"
              type="text"
              placeholder="Jane Doe"
            />
            <label
              class="mx-sm-2"
              for="inlineInput2"
            >
              Email:
            </label>
            <b-input
              id="inlineInput2"
              type="email"
              placeholder="jane.doe@example.com"
            />
          </b-form>
          <div slot="footer">
            <b-button
              type="submit"
              size="sm"
              variant="primary"
            >
              <i class="fa fa-dot-circle-o" /> Submit
            </b-button>
            <b-button
              type="reset"
              size="sm"
              variant="danger"
            >
              <i class="fa fa-ban" /> Reset
            </b-button>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Horizontal</strong> Form
          </div>
          <b-form-group
            :label-cols="3"
            label="Email"
            label-for="horizEmail"
            description="Please enter your email."
          >
            <b-form-input
              id="horizEmail"
              type="email"
              placeholder="Enter Email.."
            />
          </b-form-group>
          <b-form-group
            :label-cols="3"
            label="Password"
            label-for="horizPass"
            description="Please enter your password."
          >
            <b-form-input
              id="horizPass"
              type="password"
              placeholder="Enter Password.."
            />
          </b-form-group>
          <div slot="footer">
            <b-button
              type="submit"
              size="sm"
              variant="primary"
            >
              <i class="fa fa-dot-circle-o" /> Submit
            </b-button>
            <b-button
              type="reset"
              size="sm"
              variant="danger"
            >
              <i class="fa fa-ban" /> Reset
            </b-button>
          </div>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Normal</strong> Form
          </div>
          <b-form-group
            validated
            label="Email"
            label-for="normalEmail"
            description="Please enter your email."
          >
            <b-form-input
              id="normalEmail"
              type="email"
              placeholder="Enter Email.."
              required
            />
          </b-form-group>
          <b-form-group
            validated
            label="Password"
            label-for="normalPass"
            description="Please enter your password."
          >
            <b-form-input
              id="normalPass"
              type="password"
              placeholder="Enter Password.."
              required
            />
          </b-form-group>
          <div slot="footer">
            <b-button
              type="submit"
              size="sm"
              variant="primary"
            >
              <i class="fa fa-dot-circle-o" /> Submit
            </b-button>
            <b-button
              type="reset"
              size="sm"
              variant="danger"
            >
              <i class="fa fa-ban" /> Reset
            </b-button>
          </div>
        </b-card>
        <b-card
          :no-block="true"
          no-body
        >
          <div slot="header">
            Input <strong>Grid</strong>
          </div>
          <b-card-body>
            <b-row class="form-group">
              <b-col sm="3">
                <b-form-input
                  type="text"
                  placeholder=".col-sm-3"
                />
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="4">
                <b-form-input
                  type="text"
                  placeholder=".col-sm-4"
                />
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="5">
                <b-form-input
                  type="text"
                  placeholder=".col-sm-5"
                />
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="6">
                <b-form-input
                  type="text"
                  placeholder=".col-sm-6"
                />
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="7">
                <b-form-input
                  type="text"
                  placeholder=".col-sm-7"
                />
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="8">
                <b-form-input
                  type="text"
                  placeholder=".col-sm-8"
                />
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="9">
                <b-form-input
                  type="text"
                  placeholder=".col-sm-9"
                />
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="10">
                <b-form-input
                  type="text"
                  placeholder=".col-sm-10"
                />
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="11">
                <b-form-input
                  type="text"
                  placeholder=".col-sm-11"
                />
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="12">
                <b-form-input
                  type="text"
                  placeholder=".col-sm-12"
                />
              </b-col>
            </b-row>
          </b-card-body>
          <div slot="footer">
            <b-button
              type="submit"
              size="sm"
              variant="primary"
            >
              <i class="fa fa-user" /> Login
            </b-button>
            <b-button
              type="reset"
              size="sm"
              variant="danger"
            >
              <i class="fa fa-ban" /> Reset
            </b-button>
          </div>
        </b-card>
        <b-card>
          <div slot="header">
            Input <strong>Sizes</strong>
          </div>
          <b-form-group
            :label-cols="5"
            label="Small input"
            label-for="smInput"
            label-size="sm"
          >
            <b-form-input
              id="smInput"
              type="text"
              size="sm"
              placeholder="size='sm'"
            />
          </b-form-group>
          <b-form-group
            :label-cols="5"
            label="Default input"
            label-for="defaultInput"
          >
            <b-form-input
              id="defaultInput"
              type="text"
              placeholder="normal"
            />
          </b-form-group>
          <b-form-group
            :label-cols="5"
            label="Large input"
            label-for="lgInput"
            label-size="lg"
          >
            <b-form-input
              id="lgInput"
              type="text"
              size="lg"
              placeholder="size='lg'"
            />
          </b-form-group>
          <div slot="footer">
            <b-button
              type="submit"
              size="sm"
              variant="primary"
            >
              <i class="fa fa-dot-circle-o" /> Submit
            </b-button>
            <b-button
              type="reset"
              size="sm"
              variant="danger"
            >
              <i class="fa fa-ban" /> Reset
            </b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        sm="12"
        md="6"
      >
        <b-card
          :no-block="true"
          no-body
        >
          <div slot="header">
            <strong>Validation feedback</strong> Form
          </div>
          <b-card-body>
            <b-form-group>
              <label
                class="col-form-label"
                for="inputIsValid"
              >
                Input is valid
              </label>
              <input
                id="inputIsValid"
                type="text"
                class="form-control is-valid"
              >
              <b-form-valid-feedback>
                Input is valid.
              </b-form-valid-feedback>
            </b-form-group>
            <b-form-group>
              <label
                class="col-form-label"
                for="inputIsInvalid"
              >
                Input is invalid
              </label>
              <input
                id="inputIsInvalid"
                type="text"
                class="form-control is-invalid"
              >
              <b-form-invalid-feedback>
                Please provide a valid information.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col
        sm="12"
        md="6"
      >
        <b-card
          :no-block="true"
          no-body
        >
          <div slot="header">
            <strong>Validation feedback</strong> Form
          </div>
          <b-card-body>
            <b-form
              validated
              novalidate
            >
              <b-form-group
                label-for="inputSuccess2"
                label="Non-required input"
              >
                <b-form-input
                  id="inputSuccess2"
                  type="text"
                  class="form-control-success"
                />
                <b-form-valid-feedback>
                  Input is not required.
                </b-form-valid-feedback>
              </b-form-group>
              <b-form-group
                label-for="inputError2"
                label="Required input"
              >
                <b-form-input
                  id="inputError2"
                  type="text"
                  class="form-control-warning"
                  required
                />
                <b-form-valid-feedback>
                  Input provided.
                </b-form-valid-feedback>
                <b-form-invalid-feedback>
                  Please provide a required input.
                </b-form-invalid-feedback>
              </b-form-group>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            <strong>Icon/Text</strong> Groups
          </div>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-user" /></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input
                type="text"
                placeholder="Username"
              />
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-form-input
                type="email"
                placeholder="Email"
              />
              <b-input-group-append><b-input-group-text><i class="fa fa-envelope-o" /></b-input-group-text></b-input-group-append>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-euro" /></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input
                type="text"
                placeholder="ex. $1.000.000"
              />
              <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
            </b-input-group>
          </b-form-group>
          <div slot="footer">
            <b-button
              type="submit"
              size="sm"
              variant="success"
            >
              <i class="fa fa-dot-circle-o" /> Submit
            </b-button>
            <b-button
              type="reset"
              size="sm"
              variant="danger"
            >
              <i class="fa fa-ban" /> Reset
            </b-button>
          </div>
        </b-card>
      </b-col>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            <strong>Buttons</strong> Groups
          </div>
          <b-form-group>
            <b-input-group>
              <!-- Attach Left button -->
              <b-input-group-prepend>
                <b-button variant="primary">
                  <i class="fa fa-search" /> Search
                </b-button>
              </b-input-group-prepend>
              <b-form-input
                type="text"
                placeholder="Username"
              />
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-form-input
                type="email"
                placeholder="Email"
              />
              <!-- Attach Right button -->
              <b-input-group-append>
                <b-button variant="primary">
                  Submit
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <!-- Attach Left button -->
              <b-input-group-prepend>
                <b-button variant="primary">
                  <i class="fa fa-facebook" />
                </b-button>
              </b-input-group-prepend>
              <b-form-input
                type="email"
                placeholder="Email"
              />
              <!-- Attach Left button -->
              <b-input-group-append>
                <b-button variant="primary">
                  <i class="fa fa-twitter" />
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
          <div slot="footer">
            <b-button
              type="submit"
              size="sm"
              variant="success"
            >
              <i class="fa fa-dot-circle-o" /> Submit
            </b-button>
            <b-button
              type="reset"
              size="sm"
              variant="danger"
            >
              <i class="fa fa-ban" /> Reset
            </b-button>
          </div>
        </b-card>
      </b-col>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            <strong>Dropdowns</strong> Groups
          </div>
          <b-form-group>
            <b-input-group>
              <!-- Attach Left button -->
              <b-input-group-prepend>
                <b-dropdown
                  text="Action"
                  variant="primary"
                >
                  <b-dropdown-item>Action</b-dropdown-item>
                  <b-dropdown-item>Another action</b-dropdown-item>
                  <b-dropdown-item>Something else here...</b-dropdown-item>
                  <b-dropdown-item disabled>
                    Disabled action
                  </b-dropdown-item>
                </b-dropdown>
              </b-input-group-prepend>
              <b-form-input placeholder="Username" />
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-form-input placeholder="Email" />
              <!-- Attach Right button -->
              <b-input-group-append>
                <b-dropdown
                  text="Action"
                  variant="primary"
                  right
                >
                  <b-dropdown-item>Action</b-dropdown-item>
                  <b-dropdown-item>Another action</b-dropdown-item>
                  <b-dropdown-item>Something else here...</b-dropdown-item>
                  <b-dropdown-item disabled>
                    Disabled action
                  </b-dropdown-item>
                </b-dropdown>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <!-- Attach Left button -->
              <b-input-group-prepend>
                <b-dropdown
                  text="Split"
                  variant="primary"
                  split
                >
                  <b-dropdown-item href="#">
                    Action
                  </b-dropdown-item>
                  <b-dropdown-item href="#">
                    Another action
                  </b-dropdown-item>
                  <b-dropdown-item href="#">
                    Something else here...
                  </b-dropdown-item>
                  <b-dropdown-item disabled>
                    Disabled action
                  </b-dropdown-item>
                </b-dropdown>
              </b-input-group-prepend>
              <b-form-input placeholder="..." />
              <!-- Attach Right button -->
              <b-input-group-append>
                <b-dropdown
                  text="Action"
                  variant="primary"
                  right
                >
                  <b-dropdown-item>Action</b-dropdown-item>
                  <b-dropdown-item>Another action</b-dropdown-item>
                  <b-dropdown-item>Something else here...</b-dropdown-item>
                  <b-dropdown-item disabled>
                    Disabled action
                  </b-dropdown-item>
                </b-dropdown>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
          <div slot="footer">
            <b-button
              type="submit"
              size="sm"
              variant="success"
            >
              <i class="fa fa-dot-circle-o" /> Submit
            </b-button>
            <b-button
              type="reset"
              size="sm"
              variant="danger"
            >
              <i class="fa fa-ban" /> Reset
            </b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6">
        <b-card>
          <div slot="header">
            Use the grid for big devices! <small><code>.col-lg-*</code> <code>.col-md-*</code> <code>.col-sm-*</code></small>
          </div>
          <b-row class="form-group">
            <b-col md="8">
              <b-form-input
                type="text"
                placeholder=".col-md-8"
              />
            </b-col>
            <b-col md="4">
              <b-form-input
                type="text"
                placeholder=".col-md-4"
              />
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="7">
              <b-form-input
                type="text"
                placeholder=".col-md-7"
              />
            </b-col>
            <b-col md="5">
              <b-form-input
                type="text"
                placeholder=".col-md-5"
              />
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="6">
              <b-form-input
                type="text"
                placeholder=".col-md-6"
              />
            </b-col>
            <b-col md="6">
              <b-form-input
                type="text"
                placeholder=".col-md-6"
              />
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="5">
              <b-form-input
                type="text"
                placeholder=".col-md-5"
              />
            </b-col>
            <b-col md="7">
              <b-form-input
                type="text"
                placeholder=".col-md-7"
              />
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="4">
              <b-form-input
                type="text"
                placeholder=".col-md-4"
              />
            </b-col>
            <b-col md="8">
              <b-form-input
                type="text"
                placeholder=".col-md-8"
              />
            </b-col>
          </b-row>
          <div slot="footer">
            <b-button
              type="submit"
              size="sm"
              variant="primary"
            >
              Action
            </b-button>
            <b-button
              type="button"
              size="sm"
              variant="danger"
            >
              Action
            </b-button>
            <b-button
              type="button"
              class="btn btn-sm btn-warning"
            >
              Action
            </b-button>
            <b-button
              type="button"
              class="btn btn-sm btn-info"
            >
              Action
            </b-button>
            <b-button
              type="button"
              size="sm"
              variant="success"
            >
              Action
            </b-button>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <div slot="header">
            Input Grid for small devices! <small> <code>.col-*</code></small>
          </div>
          <b-row class="form-group">
            <b-col cols="4">
              <b-form-input
                type="text"
                placeholder=".col-4"
              />
            </b-col>
            <b-col cols="8">
              <b-form-input
                type="text"
                placeholder=".col-8"
              />
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="5">
              <b-form-input
                type="text"
                placeholder=".col-5"
              />
            </b-col>
            <b-col cols="7">
              <b-form-input
                type="text"
                placeholder=".col-7"
              />
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="6">
              <b-form-input
                type="text"
                placeholder=".col-6"
              />
            </b-col>
            <b-col cols="6">
              <b-form-input
                type="text"
                placeholder=".col-6"
              />
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="7">
              <b-form-input
                type="text"
                placeholder=".col-5"
              />
            </b-col>
            <b-col cols="5">
              <b-form-input
                type="text"
                placeholder=".col-5"
              />
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="8">
              <b-form-input
                type="text"
                placeholder=".col-8"
              />
            </b-col>
            <b-col cols="4">
              <b-form-input
                type="text"
                placeholder=".col-4"
              />
            </b-col>
          </b-row>
          <div slot="footer">
            <b-button
              type="submit"
              size="sm"
              variant="primary"
            >
              Action
            </b-button>
            <b-button
              type="button"
              size="sm"
              variant="danger"
            >
              Action
            </b-button>
            <b-button
              type="button"
              class="btn btn-sm btn-warning"
            >
              Action
            </b-button>
            <b-button
              type="button"
              class="btn btn-sm btn-info"
            >
              Action
            </b-button>
            <b-button
              type="button"
              size="sm"
              variant="success"
            >
              Action
            </b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            Example Form
          </div>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend><b-input-group-text>Username</b-input-group-text></b-input-group-prepend>
              <b-form-input type="text" />
              <b-input-group-append><b-input-group-text><i class="fa fa-user" /></b-input-group-text></b-input-group-append>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend><b-input-group-text>Email</b-input-group-text></b-input-group-prepend>
              <b-form-input type="email" />
              <b-input-group-append><b-input-group-text><i class="fa fa-envelope" /></b-input-group-text></b-input-group-append>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend><b-input-group-text>Password</b-input-group-text></b-input-group-prepend>
              <b-form-input type="password" />
              <b-input-group-append><b-input-group-text><i class="fa fa-asterisk" /></b-input-group-text></b-input-group-append>
            </b-input-group>
          </b-form-group>
          <div class="form-group form-actions">
            <b-button
              type="submit"
              size="sm"
              variant="primary"
            >
              Submit
            </b-button>
          </div>
        </b-card>
      </b-col>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            Example Form
          </div>
          <b-form-group>
            <b-input-group>
              <b-form-input
                type="text"
                placeholder="Username"
              />
              <b-input-group-append><b-input-group-text><i class="fa fa-user" /></b-input-group-text></b-input-group-append>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-form-input
                type="email"
                placeholder="Email"
              />
              <b-input-group-append><b-input-group-text><i class="fa fa-envelope" /></b-input-group-text></b-input-group-append>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-form-input
                type="password"
                placeholder="Password"
              />
              <b-input-group-append><b-input-group-text><i class="fa fa-asterisk" /></b-input-group-text></b-input-group-append>
            </b-input-group>
          </b-form-group>
          <div class="form-group form-actions">
            <b-button
              type="submit"
              class="btn btn-sm btn-secondary"
            >
              Submit
            </b-button>
          </div>
        </b-card>
      </b-col>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            Example Form
          </div>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-user" /></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input
                type="text"
                placeholder="Username"
              />
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-envelope" /></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input
                type="email"
                placeholder="Email"
              />
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-asterisk" /></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input
                type="password"
                placeholder="Password"
              />
            </b-input-group>
          </b-form-group>
          <div class="form-group form-actions">
            <b-button
              type="submit"
              size="sm"
              variant="success"
            >
              Submit
            </b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <b-card no-body>
          <div slot="header">
            <i class="fa fa-edit" /> Form Elements
            <div class="card-actions">
              <a
                href="#"
                class="btn btn-setting"
              >
                <i class="icon-settings" />
              </a>
              <b-btn
                v-b-toggle.collapse1
                class="btn btn-minimize"
              >
                <i class="icon-arrow-up" />
              </b-btn>
              <a
                href="#"
                class="btn btn-close"
              >
                <i class="icon-close" />
              </a>
            </div>
          </div>
          <b-collapse
            id="collapse1"
            visible
          >
            <b-card-body>
              <b-form-group
                label="Prepended text"
                label-for="elementsEmail"
                description="Here's some help text"
              >
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    id="elementsEmail"
                    type="email"
                  />
                </b-input-group>
              </b-form-group>
              <b-form-group
                label="Appended text"
                label-for="elementsAppend"
                description="Here's some help text"
              >
                <b-input-group>
                  <b-form-input
                    id="elementsAppend"
                    type="text"
                  />
                  <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
                </b-input-group>
              </b-form-group>
              <b-form-group
                label="Append and prepend"
                label-for="elementsPrependAppend"
                description="Here's some help text"
              >
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text>$</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    id="elementsPrependAppend"
                    type="text"
                  />
                  <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
                </b-input-group>
              </b-form-group>
              <b-form-group
                label="Append with button"
                label-for="elementsAppendButton"
                description="Here's some help text"
              >
                <b-input-group>
                  <b-form-input
                    id="elementsAppendButton"
                    type="text"
                  />
                  <b-input-group-append>
                    <b-button variant="primary">
                      Go!
                    </b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
              <b-form-group
                label="Two-buttons append"
                label-for="elementsTwoButtons"
              >
                <b-input-group>
                  <b-form-input
                    id="elementsTwoButtons"
                    type="text"
                  />
                  <b-input-group-append>
                    <b-button variant="primary">
                      Search
                    </b-button>
                    <b-button variant="danger">
                      Options
                    </b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
              <div class="form-actions">
                <b-button
                  type="submit"
                  variant="primary"
                >
                  Save changes
                </b-button>
                <b-button
                  type="button"
                  variant="secondary"
                >
                  Cancel
                </b-button>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Forms',
  data () {
    return {
      selected  : [], // Must be an array reference!
      datepicker: new Date(),
      select2   : 'a',
    }
  },
  methods: {
    click () {
      // do nothing
    },
  },
}
</script>
