import { createFileRoute } from '@tanstack/react-router';
import { SponsorshipPage } from '@/components/sponsorship-page';
const title = 'DoraDAO Sponsorship & Partnerships | Reach Builders, Creators & Developers';
const description = 'Partner with DoraDAO to reach builders, developers, founders, and creators through technology events, newsletters, community programs, marketing campaigns, and talent opportunities.';
const url = 'https://doradao.lovable.app/pricing';
export const Route = createFileRoute('/pricing')({
 head: () => ({
  meta: [{title},{name:'description',content:description},{property:'og:title',content:title},{property:'og:description',content:description},{property:'og:type',content:'website'},{property:'og:url',content:url},{name:'twitter:card',content:'summary_large_image'}],
  links: [{rel:'canonical',href:url}],
  scripts: [{type:'application/ld+json',children:JSON.stringify({'@context':'https://schema.org','@graph':[
   {'@type':'Organization','@id':'https://doradao.lovable.app/#organization',name:'DoraDAO',url:'https://doradao.lovable.app',email:'Connectdoradao@gmail.com',description:'A community for hoomans, built by hoomans, making emerging technology accessible and inclusive.'},
   {'@type':'WebPage','@id':`${url}#webpage`,url,name:title,description,about:{'@id':`${url}#service`}},
   {'@type':'Service','@id':`${url}#service`,name:'DoraDAO sponsorship and partnerships',serviceType:'Community-led sponsorship and ecosystem partnerships',provider:{'@id':'https://doradao.lovable.app/#organization'},description:'Content, newsletter, event, community program, creator, talent and custom ecosystem partnerships.'},
   {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'DoraDAO',item:'https://doradao.lovable.app'},{'@type':'ListItem',position:2,name:'Sponsorship & Partnerships',item:url}]}
  ]})}],
 }),
 component: SponsorshipPage,
});
