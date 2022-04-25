import { Typography } from 'antd';
import classNames from 'classnames';

import styles from '@styles/UserInfoList.module.css';

const PolicyList = () => (
  <ol className={styles.list}>
    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Определение терминов
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          В настоящей Политике конфиденциальности используются следующие
          термины:
          <ol className={classNames(styles.list, styles.sublist)}>
            <li>
              «Администрация Сайта» - уполномоченные на управление Сайтом
              сотрудники, которые организуют и (или) осуществляют обработку
              персональных данных, а также определяют цели обработки
              персональных данных, состав персональных данных, подлежащих
              обработке, действия (операции), совершаемые с персональными
              данными.
            </li>
            <li>
              «Персональные данные» - любая информация, относящаяся к прямо или
              косвенно к определенному или определяемому физическому лицу
              (субъекту персональных данных).
            </li>
            <li>
              «Обработка персональных данных» - любое действие (операция) или
              совокупность действий (операций), совершаемых с использованием
              средств автоматизации или без использования таких средств с
              персональными данными, включая сбор, запись, систематизацию,
              накопление, хранение, уточнение (обновление, изменение),
              извлечение, использование, передачу (распространение,
              предоставление, доступ), обезличивание, блокирование, удаление,
              уничтожение персональных данных.
            </li>
            <li>
              «Конфиденциальность персональных данных» - обязательное для
              соблюдения требование не допускать их распространения без согласия
              субъекта персональных данных или наличия иного законного
              основания.
            </li>
            <li>
              «Пользователь Сайта (далее - Пользователь)» - лицо, имеющее доступ
              к Сайту посредством сети Интернет и использующее Сайт.
            </li>
          </ol>
        </li>
      </ol>
    </li>
    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Общие положения
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          Использование Пользователем Сайта означает согласие с настоящей
          Политикой конфиденциальности и условиями обработки персональных данных
          Пользователя.
        </li>
        <li>
          В случае несогласия с условиями Политики конфиденциальности
          Пользователь должен прекратить использование Сайта.
        </li>
        <li>
          Настоящая Политика конфиденциальности применяется только к Сайту. Сайт
          не контролирует и не несет ответственность за сайты третьих лиц, на
          которые Пользователь может перейти по ссылкам, доступным на Сайте.
        </li>
        <li>
          Администрация сайта не проверяет достоверность персональных данных,
          предоставляемых Пользователем Сайта, если иное не предусмотрено иными
          Положениями.
        </li>
      </ol>
    </li>
    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Предмет политики конфиденциальности
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          Настоящая Политика конфиденциальности устанавливает обязательства
          Администрации сайта по неразглашению и обеспечению режима защиты
          конфиденциальности персональных данных, которые Пользователь
          предоставляет по запросу Администрации сайта при регистрации на Сайте
          или при оформлении доступа к Сайту.
        </li>
        <li>
          Персональные данные, разрешённые к обработке в рамках настоящей
          Политики конфиденциальности, предоставляются Пользователем путём
          заполнения регистрационной формы на Сайте и включают в себя следующую
          информацию:
          <ol className={classNames(styles.list, styles.sublist)}>
            <li> фамилию, имя, отчество Пользователя;</li>
            <li> контактный телефон Пользователя;</li>
            <li> адрес электронной почты (e-mail);</li>
          </ol>
        </li>
        <li>
          Обезличенные данные Пользователей, собираемые с помощью сервисов
          интернет-статистики, служат для сбора информации о действиях
          Пользователей на сайте, улучшения качества сайта и его содержания.
        </li>
        <li>
          Отключение cookies может повлечь невозможность доступа к частям Сайта,
          требующим авторизации.
        </li>
        <li>
          Любая иная персональная информация, не оговоренная выше, подлежит
          надежному хранению и нераспространению, за исключением случаев,
          предусмотренных в п.п. 5.2. и 5.3. настоящей Политики
          конфиденциальности.
        </li>
      </ol>
    </li>
    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Цели сбора персональной информации пользователя
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          Персональные данные Пользователя Администрация Сайта может
          использовать в целях:
          <ol className={classNames(styles.list, styles.sublist)}>
            <li>
              Идентификации Пользователя, зарегистрированного на Сайте, для
              оформления доступа к Сайту и (или) заключения Договора-оферты
              дистанционным способом.
            </li>
            <li>
              Предоставления Пользователю доступа к персонализированным ресурсам
              Сайта.
            </li>
            <li>
              Установления с Пользователем обратной связи, включая направление
              уведомлений, запросов, касающихся использования Сайта, оказания
              услуг, обработка запросов и заявок от Пользователя.
            </li>
            <li>
              Определения места нахождения Пользователя для обеспечения
              безопасности, предотвращения мошенничества.
            </li>
            <li>Создания учетной записи.</li>
            <li>
              Уведомления Пользователя Сайта о состоянии заявки на
              предоставление доступа, о новых сервисах, специальных предложениях
              и различных событиях.
            </li>
            <li>Обработки и получения платежей.</li>
            <li>
              Предоставления Пользователю эффективной клиентской и технической
              поддержки при возникновении проблем, связанных с использованием
              Сайта.
            </li>
            <li>
              Предоставления доступа Пользователю на сайты или сервисы партнеров
              Сайта с целью получения продуктов, обновлений и услуг.
            </li>
          </ol>
        </li>
      </ol>
    </li>
    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Способы и сроки обработки персональной информации
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          Обработка персональных данных Пользователя осуществляется без
          ограничения срока, любым законным способом, в том числе в
          информационных системах персональных данных с использованием средств
          автоматизации или без использования таких средств.
        </li>
        <li>
          Пользователь соглашается с тем, что Администрация сайта вправе
          передавать персональные данные третьим лицам исключительно в целях
          выполнения соответствующего поручения Пользователя, оформленного на
          Сайте.
        </li>
        <li>
          Персональные данные Пользователя могут быть переданы уполномоченным
          органам государственной власти Российской Федерации только по
          основаниям и в порядке, установленным законодательством Российской
          Федерации.
        </li>
        <li>
          При утрате или разглашении персональных данных Администрация сайта
          информирует Пользователя об утрате или разглашении персональных
          данных.
        </li>
        <li>
          Администрация сайта принимает необходимые организационные и
          технические меры для защиты персональной информации Пользователя от
          неправомерного или случайного доступа, уничтожения, изменения,
          блокирования, копирования, распространения, а также от иных
          неправомерных действий третьих лиц.
        </li>
        <li>
          Администрация сайта совместно с Пользователем принимает все
          необходимые меры по предотвращению убытков или иных отрицательных
          последствий, вызванных утратой или разглашением персональных данных
          Пользователя.
        </li>
      </ol>
    </li>
    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Обязательства Сторон
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          Пользователь обязан:
          <ol className={classNames(styles.list, styles.sublist)}>
            <li>
              Предоставить информацию о персональных данных, необходимую для
              пользования Сайтом.
            </li>
          </ol>
        </li>
        <li>
          Администрация сайта обязана:
          <ol className={classNames(styles.list, styles.sublist)}>
            <li>
              Использовать полученную информацию исключительно для целей,
              указанных в п. 4 настоящей Политики конфиденциальности.
            </li>
            <li>
              Обеспечить хранение конфиденциальной информации в тайне, не
              разглашать без предварительного разрешения Пользователя, а также
              не осуществлять продажу, обмен, опубликование, либо разглашение
              иными возможными способами полученных персональных данных
              Пользователя, за исключением п.п. 5.2. и 5.3. настоящей Политики
              Конфиденциальности.
            </li>
            <li>
              Принимать меры предосторожности для защиты конфиденциальности
              персональных данных Пользователя согласно порядку, обычно
              используемому для защиты такого рода информации в существующем
              деловом обороте.
            </li>
            <li>
              Осуществить блокирование персональных данных, относящихся к
              соответствующему Пользователю, с момента обращения или запроса
              Пользователя или его законного представителя либо уполномоченного
              органа по защите прав субъектов персональных данных на период
              проверки, в случае выявления недостоверных персональных данных или
              неправомерных действий.
            </li>
          </ol>
        </li>
      </ol>
    </li>

    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Ответственность Сторон
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          Администрация сайта, не исполнившая свои обязательства, несёт
          ответственность за убытки, понесённые Пользователем в связи с
          неправомерным использованием персональных данных, в соответствии с
          законодательством Российской Федерации, за исключением случаев,
          предусмотренных п.п. 5.2., 5.3. и 7.2. настоящей Политики
          Конфиденциальности.
        </li>
        <li>
          В случае утраты или разглашения Конфиденциальной информации
          Администрация сайта не несёт ответственность, если данная
          конфиденциальная информация:
          <ol className={classNames(styles.list, styles.sublist)}>
            <li>Стала публичным достоянием до её утраты или разглашения.</li>
            <li>
              Была получена от третьей стороны до момента её получения
              Администрацией сайта.
            </li>
            <li>Была разглашена с согласия Пользователя. </li>
          </ol>
        </li>
      </ol>
    </li>

    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Разрешение споров
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          До обращения в суд с иском по спорам, возникающим из отношений между
          Пользователем Сайта и Администрацией сайта, обязательным является
          предъявление претензии (письменного предложения о добровольном
          урегулировании спора).
        </li>
        <li>
          Получатель претензии в течение 30 календарных дней со дня получения
          претензии письменно уведомляет заявителя претензии о результатах
          рассмотрения претензии.
        </li>
        <li>
          При недостижении соглашения спор будет передан на рассмотрение в
          судебный орган в соответствии с действующим законодательством
          Российской Федерации.
        </li>
        <li>
          К настоящей Политике конфиденциальности и отношениям между
          Пользователем и Администрацией сайта применяется действующее
          законодательство Российской Федерации.
        </li>
      </ol>
    </li>
    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Дополнительные условия
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          Администрация сайта вправе вносить изменения в настоящую Политику
          конфиденциальности без согласия Пользователя.
        </li>
        <li>
          Новая Политика конфиденциальности вступает в силу с момента ее
          размещения на Сайте, если иное не предусмотрено новой редакцией
          Политики конфиденциальности.
        </li>
        <li>
          Все предложения или вопросы по настоящей Политике конфиденциальности
          следует сообщать по адресу электронной почты и/или номеру телефона,
          указанным на Сайте.
        </li>
        <li>Действующая Политика конфиденциальности размещена на Сайте.</li>
      </ol>
    </li>
  </ol>
);

export default PolicyList;