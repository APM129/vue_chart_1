import UAParser from 'ua-parser-js';

/**
 * 检测当前设备是否是 mobile，使用 ua-parser-js 实现，设备除了 mobile 和 desktop，还有可能是 smarttv（智能电视） wearable（可穿戴设备）但这里均视为 desktop
 * @returns boolean
 */
export const checkIsMobile = () => {
    const parser = new UAParser()
    
    return parser.getDevice().type === 'mobile'
}