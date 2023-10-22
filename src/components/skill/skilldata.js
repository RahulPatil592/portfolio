
import cppimage from '../../assets/C++_icon.svg'
import javaimg from '../../assets/java_icon.svg'
import javasimg from '../../assets/js_icon.svg'
import pyimg from '../../assets/python_icon.svg'
import htmlimg from '../../assets/html_icon.svg'
import cssimg from '../../assets/css_icon.svg'
import reactimg from '../../assets/react_icon.svg'
import nodeimg from '../../assets/node_icon.svg'
import mysqlimg from '../../assets/mysql_icon.svg'
import mongoimg from '../../assets/mongodb_icon.svg'
import figmaimg from '../../assets/figma_icon.svg'
import psimg from '../../assets/ps_icon.svg'
import canvaimg from '../../assets/canva_icon.svg'
const data=[
    {
        type:'Programming Languages',
        subtype:[
            {
                imgsrc:cppimage,
                name:'C++',
                level:'Advanced'
            },
            {
                imgsrc:pyimg,
                name:'Python',
                level:'Intermediate'
            },
            {
                imgsrc:javasimg,
                name:'JavaScript',
                level:'Intermediate'
            },
            {
                imgsrc:javaimg,
                name:'Java',
                level:'Basic'
            },
            
        ]
    },
    {
        type:'Front-End Development',
        subtype:[
            {
                imgsrc:htmlimg,
                name:'HTML',
                level:'Advanced'
            },
            {
                imgsrc:cssimg,
                name:'CSS',
                level:'Advanced'
            },
            {
                imgsrc:reactimg,
                name:'React',
                level:'Advanced'
            },
           
        ]
    },
    {
        type:'Back-End Development',
        subtype:[
            {
                imgsrc:nodeimg,
                name:'NodeJs',
                level:'Advanced'
            },
            {
                imgsrc:mysqlimg,
                name:'MySQL',
                level:'Intermediate'
            },
            {
                imgsrc:mongoimg,
                name:'MongoDB',
                level:'Basic'
            },
            
        ]
    },
    {
        type:'UI Development',
        subtype:[
            {
                imgsrc:figmaimg,
                name:'Figma',
                level:'Intermediate'
            },
            {
                imgsrc:psimg,
                name:'Photoshop',
                level:'Basic'
            },
            {
                imgsrc:canvaimg,
                name:'Canva',
                level:'Basic'
            },
            
        ]
    },
    
]

export default data;