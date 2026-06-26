# Social Proof Setup Guide

Este documento explica como configurar depoimentos, logos de clientes e estudos de caso quando estiverem prontos.

## Estrutura Preparada

O componente `SocialProofSection` está pronto para receber três tipos de conteúdo:

### 1. Depoimentos (Testimonials)

```typescript
interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number; // 1-5 stars
}
```

**Como adicionar:**
1. Colete depoimentos de clientes reais
2. Obtenha autorização formal para usar nome, empresa e foto
3. Adicione ao arquivo `client/src/data/testimonials.ts`
4. Importe e passe para `SocialProofSection` na página Home

### 2. Logos de Clientes (Client Logos)

```typescript
interface ClientLogo {
  id: string;
  name: string;
  logo: string; // URL da imagem
}
```

**Como adicionar:**
1. Colete logos de empresas clientes
2. Obtenha permissão para exibir os logos
3. Faça upload das imagens para S3 usando `manus-upload-file`
4. Adicione URLs ao arquivo `client/src/data/clientLogos.ts`
5. Importe e passe para `SocialProofSection` na página Home

### 3. Estudos de Caso (Case Studies)

```typescript
interface CaseStudy {
  id: string;
  title: string;
  company: string;
  description: string;
  results: string[];
  image?: string; // URL da imagem
}
```

**Como adicionar:**
1. Documente casos de sucesso reais
2. Obtenha autorização da empresa para publicar
3. Prepare descrição e resultados mensuráveis
4. Faça upload de imagens se houver
5. Adicione ao arquivo `client/src/data/caseStudies.ts`
6. Importe e passe para `SocialProofSection` na página Home

## Implementação no Home

Quando tiver conteúdo pronto, atualize `client/src/pages/Home.tsx`:

```typescript
import SocialProofSection from "@/components/SocialProofSection";
import { testimonials } from "@/data/testimonials";
import { clientLogos } from "@/data/clientLogos";
import { caseStudies } from "@/data/caseStudies";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FAQSection />
        <SocialProofSection
          testimonials={testimonials}
          clientLogos={clientLogos}
          caseStudies={caseStudies}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
```

## Importante

- **Sem conteúdo fictício**: Nunca use depoimentos, logos ou estudos de caso inventados
- **Autorização formal**: Sempre obtenha permissão escrita antes de publicar
- **Renderização condicional**: O componente não renderiza se não houver conteúdo
- **Escalabilidade**: A estrutura suporta quantos itens forem necessários

## Próximas Etapas

1. Colete autorizações formais de clientes
2. Prepare conteúdo (depoimentos, resultados, imagens)
3. Crie os arquivos de dados em `client/src/data/`
4. Atualize `Home.tsx` para importar e passar os dados
5. Teste responsividade em mobile e desktop
6. Publique com `webdev_save_checkpoint` e `Publish`
