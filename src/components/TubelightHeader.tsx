import { Home, Settings, Briefcase, MessageSquare, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

const TubelightHeader = () => {
  const navItems = [
    { name: 'Home', url: 'home', icon: Home },
    { name: 'Serviços', url: 'servicos', icon: Settings },
    { name: 'Portfolio', url: 'portfolio', icon: Briefcase },
    { name: 'Depoimentos', url: 'depoimentos', icon: MessageSquare },
    { name: 'Contato', url: 'contato', icon: Mail }
  ]

  return <NavBar items={navItems} className="z-[40]" />
}

export default TubelightHeader 