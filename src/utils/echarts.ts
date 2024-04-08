import * as echarts from 'echarts/core';
import { LineChart, BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

import type { ComposeOption } from 'echarts/core';
import type { LineSeriesOption, BarSeriesOption } from 'echarts/charts';

export type ECOption = ComposeOption<LineSeriesOption | BarSeriesOption>

echarts.use([
    LineChart,
    BarChart,
    GridComponent,
    CanvasRenderer
])

export default echarts