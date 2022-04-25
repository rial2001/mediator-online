import { Typography } from 'antd';
import classNames from 'classnames';

import styles from '@styles/UserInfoList.module.css';

const UserAgreementList = () => (
  <ol className={styles.list}>
    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Определение терминов
      </Typography.Title>
      <ol className={styles.list}>
        <dt>
          Закон – Федеральный закон 193-ФЗ от 27 июля 2010 г. «Об альтернативной
          процедуре урегулирования споров с участием посредника (процедуре
          медиации)»; Сервис – сервис, доступный по адресу
          https://Медиатор.ОНЛАЙН; Медиатор –лицо, соответствующее определению и
          требованиям Закона, а также размещающий в Сервисе Профиль, и/или
          осуществляющий просмотр Заявок; Уполномоченный Медиатор – Медиатор,
          определенный Сторонами для Процедуры медиации Пользователь –
          пользователь сети «Интернет», использующий функциональные возможности
          Сервиса; Стороны - желающие урегулировать спор с помощью процедуры
          медиации субъекты отношений, указанных в ст.1 Закона; Процедура
          медиации - способ урегулирования споров при содействии Медиатора на
          основе добровольного согласия сторон в целях достижения ими
          взаимоприемлемого решения; Соглашение о применении процедуры медиации
          - соглашение сторон, заключенное в письменной форме (ст. 434 ГК РФ) до
          возникновения спора или споров (медиативная оговорка) либо после его
          или их возникновения, об урегулировании с применением процедуры
          медиации спора или споров, которые возникли или могут возникнуть между
          сторонами в связи с каким-либо конкретным правоотношением; Соглашение
          о проведении процедуры медиации - соглашение сторон, с момента
          заключения которого начинает применяться процедура медиации в
          отношении спора или споров, возникших между сторонами; Медиативное
          соглашение - соглашение, достигнутое сторонами в результате применения
          процедуры медиации к спору или спорам, к отдельным разногласиям по
          спору и заключенное в письменной форме; Заявка – опубликованное
          Пользователем и/или Сторонами сообщение в Сервисе, адресованное
          Медиаторам, с предложением проведения процедуры медиации; Публичный
          Профиль – страница Медиатора, доступная в Сервисе для неограниченного
          круга лиц, содержащая информацию об Медиаторе, в том числе его
          контактные данные, информацию об оказываемых им услугах, опыте работы,
          образовании, специальных отметках Сервиса и т.д; Профиль (личный
          кабинет) – раздел на Сервисе, посредством которого Медиатор может
          редактировать Публичный Профиль, загружать формы документов текстовые,
          фото-, видео-материалы, задавать иные настройки и параметры
          использования Сервиса.
        </dt>
      </ol>
    </li>

    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Согласие с условиями
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          Медиатору необходимо дать свое согласие с Условиями, для того чтобы
          пользоваться Сервисом. Медиатор не вправе пользоваться Сервисом, если
          не принял Условия.
        </li>
        <li>
          Настоящие Условия, равно как и указанные выше документы, могут быть
          изменены без какого-либо специального уведомления. Новые редакции
          Условий вступают в силу с момента их размещения в сети Интернет по
          адресам, указанным в пункте 1. настоящих Условий, если иное не
          предусмотрено новыми редакциями Условий. Продолжение пользования
          Сервисом после изменения Условий считается согласием с их новыми
          редакциями.
        </li>
      </ol>
    </li>

    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Использование Сервиса
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          Функционал Сервиса доступен Модератору при прохождении им процедуры
          регистрации на Сервисе и заполнении им своего Публичного Профиля
          (далее – авторизация). При авторизации Медиатор подтверждает, что не
          является лицом, замещающим государственные должности Российской
          Федерации, государственные должности субъектов Российской Федерации,
          должности государственной гражданской службы, должности муниципальной
          службы, если иное не предусмотрено федеральными законами. Медиатор
          выражает согласие на обработку Сервисом представленной им в учетной
          записи информации в целях использования функционала Сервиса.
        </li>
        <li>
          Сервис предоставляет авторизованному Медиатору функциональную
          возможность направления сообщений Сторонам. В целях осуществления
          контроля качества, а также в рамках выполнения требований
          законодательства, Сервис осуществляет хранение истории взаимодействия
          между Пользователями, Медиаторами посредством соответствующих функции
          Сервиса.
        </li>
        <li>
          Медиатор гарантирует размещение им в Публичном Профиле достоверной,
          полной и актуальной информации, а также самостоятельную и
          своевременную актуализацию представленных им сведений. Сервис
          оставляет за собой право проводить проверку информации и требовать от
          Медиатора подтверждения информации, указанной в Публичном Профиле, а
          также запрашивать в связи с этим подтверждающие документы.
        </li>
        <li>
          Размещая информацию в Публичном Профиле, Медиатор соглашается с тем,
          что предоставленные им сведения, будут доступны неограниченному кругу
          лиц на территории всего мира. Публичный профиль может содержать
          специальные пометки.
        </li>
        <li>
          Сервис оставляет за собой право без предупреждения и по своему
          усмотрению удалить любую информацию, опубликованную в Сервисе, и/или
          ограничить доступ Медиатора к Сервису или отдельным его функциям, в
          том числе, в случае, если действия Медиатора противоречит
          законодательству Российской Федерации, настоящим Условиям, а также
          требованиям Сервиса к публикуемым материалам.
        </li>
      </ol>
    </li>

    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Процедура медиации
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          При проведении процедуры медиации Медиатор руководствуется Законом.
        </li>
        <li>
          В случае согласования Заявки Сторонами, Медиатор проводит мероприятия,
          необходимые для заключения сторонами соглашения о проведении процедуры
          медиации в соответствии с Законом в течение 30 календарных дней с даты
          оформления Заявки. Порядок проведения процедуры медиации
          устанавливается соглашением о проведении процедуры медиации.
        </li>
        <li>
          Использование функциональных возможностей Сервиса является правом
          Сторон и Медиатора. При использовании функциональных возможностей
          Сервиса, соблюдение письменной формы соглашения о проведении процедуры
          медиации является обязательным условием.
        </li>
        <li>
          Медиатор не вправе: - быть представителем какой-либо стороны; -
          оказывать какой-либо стороне юридическую, консультационную или иную
          помощь; - осуществлять деятельность медиатора, если при проведении
          процедуры медиации он лично (прямо или косвенно) заинтересован в ее
          результате, в том числе состоит с лицом, являющимся одной из сторон, в
          родственных отношениях; - делать без согласия сторон публичные
          заявления по существу спора; - разглашать и размещать на Сервисе
          информацию, относящуюся к процедуре медиации и ставшую ему известной
          при ее проведении, без согласия сторон.
        </li>
        <li>
          Медиатор самостоятельно и всецело несёт ответственность за
          соответствие процедуры медиации Закону. Сервис не является участником
          процедуры медиации и не несет ответственности за качество,
          своевременность, полноту процедуры медиации, а также за действия
          Сторон и Медиатора.
        </li>
        <li>
          Используя возможности Сервиса, Медиатор обязан действовать
          добросовестно и воздержаться от злоупотребления функциональными
          возможностями Сервиса.
        </li>
        <li>
          Процедура медиации прекращается в связи со следующими
          обстоятельствами: - заключение Сторонами медиативного соглашения - со
          дня подписания такого соглашения; - заключение соглашения Сторон о
          прекращении процедуры медиации без достижения согласия по имеющимся
          разногласиям - со дня подписания такого соглашения; - заявление
          Медиатора в письменной форме, направленное сторонам после консультаций
          с ними по поводу прекращения процедуры медиации ввиду
          нецелесообразности ее дальнейшего проведения, - в день направления
          данного заявления; - заявление одной, нескольких или всех Сторон,
          направленное Медиатору, об отказе от продолжения процедуры медиации -
          со дня получения Медиатором данного заявления; - истечение срока
          проведения процедуры медиации - со дня его истечения с учетом
          положений статьи 13 Закона.
        </li>
        <li>
          Указанная в Публичном профиле информация об Стоимости оплаты
          деятельности по проведению процедуры медиации Медиатором, а также
          условиях и стоимости их оказания, носит справочный характер. Конечная
          стоимость, условия оплаты и доли Сторон определяются Соглашением о
          проведении процедуры медиации.
        </li>
        <li>
          Все претензии, связанные с процедурой медиации, должны быть направлены
          в адрес Уполномоченного Медиатора.
        </li>
        <li>
          Обращения по вопросам, связанным с работой Сервиса,
          размещением/отменой Процедуры медиации, жалобы на действия
          Стороны/Сторон, Медиатора могут быть направлены через специальный чат
          Сервиса.
        </li>
        <li>
          Сервис не определяет содержания и не несет ответственности за Заявки,
          предоставленные Стороной/Сторонами. Все вопросы и жалобы, связанные с
          такими Заявками, Медиатор может адресовать напрямую Стороне, либо
          через специальный чат Сервиса.
        </li>
      </ol>
    </li>

    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Обязательство о неразглашении информации
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          Пользователь обязуется:
          <ol className={classNames(styles.list, styles.sublist)}>
            <li>
              не разглашать информацию, относящуюся к Процедуре медиации и
              ставшую ему известной при ее проведении, за исключением случаев,
              когда на это имеется согласие всех участников процедуры медиации
              или этого требует законодательство Российской Федерации;
            </li>
            <li>
              не использовать в судебном, третейском и иных процессах в качестве
              доказательств или свидетельств высказанные мнения и предложения
              участников процедуры медиации, аргументацию и любую другую
              информацию, полученную в ходе процедуры медиации;
            </li>
            <li>
              не ссылаться, если все участники процедуры медиации не
              договорились об ином, в ходе судебного разбирательства или
              третейского разбирательства на информацию о:
              <ol className={classNames(styles.list, styles.sublist)}>
                <li>
                  предложении одной из сторон о применении процедуры медиации,
                  равно как и готовности одной из сторон к участию в проведении
                  данной процедуры;
                </li>
                <li>
                  мнениях или предложениях, высказанных одной из сторон в
                  отношении возможности урегулирования спора;
                </li>
                <li>
                  признаниях, сделанных одной из сторон в ходе проведения
                  процедуры медиации;
                </li>
                <li>
                  готовности одной из сторон принять предложение медиатора или
                  другой стороны об урегулировании спора;
                </li>
              </ol>
            </li>
            <li>
              не разглашать, не использовать, не распространять все аудио- и
              видеозаписи, документы, а также иные информационные носители,
              сделанные или полученные в ходе процедуры медиации, без
              специального взаимного соглашения всех участников процедуры
              медиации.
            </li>
          </ol>
        </li>
      </ol>
    </li>

    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Ограничение ответственности
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          Сервис предоставляется «как есть». Администрация Сервиса не
          гарантирует соответствие Сервиса целям и ожиданиям Пользователя,
          бесперебойную и безошибочную работу Сервиса в целом и его отдельных
          функциональных возможностей, в частности, Администрация Сервиса вправе
          в любой момент полностью или частично изменить функциональные
          возможности, предоставляемые Сервисом.
        </li>
        <li>
          Администрация Сервиса не обязана осуществлять модерацию, просмотр,
          редактирование размещаемой в рамках Сервиса информации, сообщений,
          контроль над ними, и не может гарантировать, что размещенная в рамках
          Сервиса информация не нарушает положений настоящих Условий, правовых
          актов, иных документов. Пользователь признает и соглашается с тем, что
          Администрация Сервиса не обязана просматривать информацию, сообщения
          любого вида, размещаемые и/или распространяемые посредством Сервиса.
          Пользователь осознает и согласен с тем, что он должен самостоятельно
          оценивать все риски, связанные с использованием информации, сообщений
          и Контента, размещенных в Сервисе, включая оценку их законности.
        </li>
        <li>
          Администрация Сервиса не является участником Процедуры медиации, а
          также правоотношений, устанавливаемых между Пользователями, в том
          числе не выполняет в ней функций агентирования, посредничества и
          представительства (за исключением случаев, когда между Администрацией
          и Пользователем заключены отдельные договоры/соглашения,
          устанавливающие иные условия), не отвечает за исполнение сторонами
          своих обязанностей. Пользователи обязуются самостоятельно улаживать
          все споры по самой Процедуре медиации. При возникновении спора по
          самой Процедуре медиации Уполномоченный Медиатор обязуется направить
          соответствующее сообщение Администрации Сервиса через специальный чат
          Сервиса.
        </li>
        <li>
          Администрация Сервиса оставляет за собой право на свое усмотрение
          ограничить доступ Пользователя к Сервису (или к определенным функциям
          Сервиса, если это возможно технологически) с использованием его
          учетной записи или полностью заблокировать Аккаунт Пользователя при
          выявлении подозрительной активности в Сервисе, непрохождения
          внутренней процедуры модерации, нарушении Пользователем настоящих
          Условий или Регулирующих документов и в иных случаях, а также
          применить к Пользователю иные меры с целью соблюдения требований
          законодательства или прав и законных интересов третьих лиц.
        </li>
        <li>
          В случае наличия обоснованных предположений о возможном нарушении
          законодательства, прав и интересов третьих лиц размещенным в Сервисе
          информации, либо действиями Сторон и/или Медиатора, Пользователь может
          направить жалобу на содержание информации либо действия Сторон и/или
          Медиатора, воспользовавшись специальным чатом Сервиса. При направлении
          жалобы Пользователь должен указать причину, по которой информация или
          Сторона и/или Медиатор, по его мнению, может нарушать
          законодательство, права и интересы третьих лиц. На основании
          поступивших жалоб Администрация сервиса вправе принять соответствующие
          меры для устранения нарушения.
        </li>
      </ol>
    </li>

    <li className={styles.titleList}>
      <Typography.Title className={styles.titleList} level={4}>
        Ограничение ответственности
      </Typography.Title>
      <ol className={styles.list}>
        <li>
          Администрация Сервиса не гарантирует сохранность данных, размещенных в
          Сервисе в каком-либо объеме и/или в течение какого-либо срока, в том
          числе в случае изменения данных в связи с развитием или изменением
          Сервиса. Предоставленные Пользователем сведения обрабатываются на
          условиях Политики конфиденциальности в целях, связанных с
          предоставлением Пользователю функциональности Сервиса, в том числе для
          проверки сведений, размещенных Пользователем в Сервисе, осуществления
          обратной связи по вопросам, связанным с использованием Сервиса, и в
          иных целях, указанных в настоящих Условиях и Политике
          конфиденциальности.
        </li>
        <li>
          Информация, размещенная Пользователями в Сервисе, может быть
          использована Сервисом в иных приложениях Администрации Сервиса, а
          также в рекламных или маркетинговых материалах, размещаемых в сети
          Интернет, а также на иных ресурсах и сайтах в сети Интернет, для
          привлечения внимания других пользователей к Сервису в целом или к иным
          приложениям и сервисам, как с указанием имени Пользователя,
          разместившего информацию (в качестве имени автора при этом будет
          указываться имя (псевдоним) Пользователя, которое он указал при
          регистрации или в настройках своих данных в соответствующем разделе
          Сервиса), так и без этого, без необходимости получения специального
          разрешения Пользователя и без выплаты авторского вознаграждения, на
          территории всех стран мира без ограничения срока, с правом
          Администрации Сервиса предоставить права использования такой
          информации третьим лицам. При этом Пользователь признает и
          соглашается, что Администрация Сервиса не обязана просматривать такую
          информацию, а их использование указанными способами в указанных целях
          может осуществляться автоматически посредством программных средств. В
          случае если Пользователь не вправе предоставить Администрации Сервиса
          право использования какой-либо информации и материалов подобным
          способом, он обязан воздержаться от размещения такой информации.
        </li>
        <li>
          Любая информация, используемая в Сервисе, предназначена исключительно
          для личного некоммерческого использования. При этом любое копирование
          информации Сервиса, в том числе с использованием автоматических и иных
          программных средств получения доступа к данным, ее воспроизведение,
          переработка, распространение, доведение до всеобщего сведения
          (опубликование) в сети Интернет, любое использование в средствах
          массовой информации и/или в коммерческих целях без предварительного
          письменного разрешения Администрации Сервиса запрещается.
        </li>
        <li>
          Пользователь обязуется не использовать информацию, размещенную в
          Сервисе без надлежащего разрешения Администрации Сервиса и/или
          Пользователя, которому принадлежит данная информация, в случаях, когда
          такое использование не связано с целями Сервиса. Пользователю
          запрещается использовать контактные данные Сторон и/или Медиатора и
          функциональные возможности Сервиса по обеспечению связи с
          Пользователем для целей прямой рекламной рассылки или другой рассылки
          нежелательных электронных сообщений, а также для иных противоправных
          действий или действий, совершаемых без ведома и/или согласия
          Администрации Сервиса и/или Пользователя, которому принадлежит данная
          информация.
        </li>
        <li>
          По вопросам и претензиям, связанным с использованием или
          невозможностью использования Сервиса, а также с возможным нарушением
          законодательства и/или прав третьих лиц в Сервисе Пользователь может
          направить свое обращение через специальный чат Сервиса.
        </li>
      </ol>
    </li>
  </ol>
);

export default UserAgreementList;