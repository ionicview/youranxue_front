import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor() { }

    getContentsByBookId(bookId:number): TreeviewItem[] {
        console.log(bookId);
        const chapter11 = new TreeviewItem({
            text: '第十一章 一次函数', value: 1, collapsed: true, children: [
                { text: '11.1 变量与函数', value: 1001 ,checked:false},
                { text: '11.2 一次函数', value: 1002 ,checked:false},
                { text: '11.3 用函数观点看方程（组）与不等式', value: 1003,checked:false }
            ]
        });
        const chapter12 = new TreeviewItem({
            text: '第十二章 数据的描述 ', value: 2, collapsed: true, children: [
                { text: '12.1 几种常见的统计图表', value: 2001,checked:false },
                { text: '12.2 用图表描述数据', value: 2002 ,checked:false},
                { text: '12.3 课题学习 从数据谈节水', value: 2003 ,checked:false}
            ]
        });

        return [chapter11, chapter12];
    }
}
