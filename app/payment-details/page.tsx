import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { createLegalMetadata } from "@/lib/legal-metadata";

export const metadata: Metadata = createLegalMetadata({
  title: "Платёжные реквизиты",
  description: "Платёжные и банковские реквизиты ООО «Презент Симпл».",
  path: "/payment-details",
});

export default function PaymentDetailsPage() {
  return (
    <LegalPageShell title="Платёжные реквизиты">
      <p>Наименование организации: ООО «ПРЕЗЕНТ СИМПЛ»</p>
      <p>
        Полное наименование организации: ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ПРЕЗЕНТ СИМПЛ»
      </p>
      <p>
        Юридический адрес: 420074, Республика Татарстан, г. Казань, ул. Петербургская, д. 52,
        офис/блок 43/28
      </p>
      <p>ИНН: 1655496590</p>
      <p>КПП: 165501001</p>
      <p>ОГРН: 1231600036865</p>
      <p>ОКПО: 51780896</p>
      <p>
        E-mail: <a href="mailto:support@presentsimple.ai">support@presentsimple.ai</a>
      </p>
      <p>
        Сайт:{" "}
        <a href="https://presentsimple.ai" target="_blank" rel="noopener noreferrer">
          https://presentsimple.ai
        </a>
      </p>

      <section>
        <h2>Банковские реквизиты</h2>
        <p>Банк: ОТДЕЛЕНИЕ «БАНК ТАТАРСТАН» N8610 ПАО СБЕРБАНК</p>
        <p>Р/счет: 40702810162000105439</p>
        <p>Кор/счет: 30101810600000000603</p>
        <p>ИНН банка: 7707083893</p>
        <p>КПП банка: 165502001</p>
        <p>БИК: 049205603</p>
      </section>
    </LegalPageShell>
  );
}
