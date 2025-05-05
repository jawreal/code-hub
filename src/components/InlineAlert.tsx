import { memo } from 'react';
import { alertConfig } from '../data/inlineAlertConfig';
import { INLINEALERT_TYPE } from '../helpers/reusableTypes';


const InlineAlert = ({ type, text }: INLINEALERT_TYPE ) => {
  return (
    <div 
      className={`${alertConfig[type].colors.bg} ${alertConfig[type].colors.border} border rounded-md p-3 mt-3`}
    >
      <div className="flex">
        <div className={`flex-shrink-0 ${alertConfig[type].colors.icon}`}>
          {alertConfig[type].icon}
        </div>
        <div className="ml-3 flex-1">
          <p className={`text-sm ${alertConfig[type].colors.text}`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(InlineAlert);