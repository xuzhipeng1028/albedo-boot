const DIC = {
  vaild: [{
    label: '否',
    value: '0'
  },
    {
      label: '是',
      value: '1'
    }
  ]
}
export default {
    submitText: '完成',
    column: [{
            label: "用户名",
            prop: "username",
            rules: [{
                required: true,
                message: "请输入用户名",
                trigger: "blur"
            }],
        },
        {
            label: "姓名",
            prop: "name",
            disabled: true,
            formsolt: true,
        },
        {
            label: "类型",
            prop: "type",
            type: "select",
            dicData: 'GRADE'
        },
        {
            label: "权限",
            prop: "grade",
            type: "checkbox",
          dicData:DIC.vaild
        },
        {
            label: "性别",
            prop: "sex",
            type: "radio",
            dicData: 'SEX',
            valueDefault: 0,
        },
        {
            label: "开关",
            prop: "switch",
            type: "switch",
            dicData: 'SEX',
            hide: true,
        },
        {
            label: "地址",
            span: 24,
            formHeight: 180,
            type: "ueditor",
            prop: "address",
        }
    ]
};
