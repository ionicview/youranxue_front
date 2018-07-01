export class ChartTestVo {
    public category: string;
    public chartDatasets: ChartData[];
}

export class ChartData {
    public data: number[];
    public label: string;
}
