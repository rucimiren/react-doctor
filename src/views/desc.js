import React from 'react'
import { NavBar, Icon } from 'antd-mobile';


class Component extends React.Component {


    render() {
        return (
            <div id='HO-desc'>
                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}

                    >医院介绍</NavBar>
                </header>
                <div style={{ marginTop: '46px' }}></div>
                <div className="login" style={{ width: '100vw', height: '150px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="http://static.yufenghen.cn/vueserver/resource/img/logo.png" alt="img" width='150' />
                </div>
                <div className="desc">
                    <p>大同美中嘉和肿瘤医院是泰和诚医疗集团下属独资专科医院。</p>
                    <p>泰和诚集团作为专业提供肿瘤放疗及诊断服务的医院管理集团，拥有十多年的从业经验，是行业内公认的管理规范、注重服务质量、规模**的企业。作为中国肿瘤诊疗中心运营及相关服务领域**实力的龙头企业，我们拥有中国规模**、最完善的肿瘤诊断和治疗服务网络。在未来我们将拥有以核心三级高端肿瘤医院为点，以二级肿瘤医院、独立影像中心、独立放疗中心以及合作中心为面的覆盖全国的各类肿瘤诊疗机构。目前泰和诚的合作中心，在运营中心数量、经营业绩、临床病例、专家队伍及发表学术专刊和著作数量方面均排名**。</p>
                    <p>大同美中嘉和肿瘤医院是泰和诚医疗集团下属独资专科医院，地处山西省大同市昌泰街117号。大同美中嘉和肿瘤医院作为泰和诚医疗的全资子公司，是泰和诚医疗体系中首家独立的以放疗为主的肿瘤专科医院。医院投资6000万元人民币，计划设置100个床位，引用国际先进肿瘤设备，开展肿瘤专业的科研、诊断与治疗，为患者提供先进的肿瘤诊断和放疗服务。</p>
                    <p>泰和诚医疗未来将逐步建立一个覆盖全国的肿瘤专科医院连锁网络，大同美中嘉和肿瘤医院是该发展战略的重要环节。</p>
                </div>
            </div>
        )
    }
}

export default Component