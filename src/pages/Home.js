import React, {useState} from "react";
import {Content} from "antd/es/layout/layout";
import {Col, Flex, Row, Space, Table, Typography} from "antd";


const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

export default function Home() {

  const [selectionType, setSelectionType] = useState('checkbox');
  const [selectionMail, setSelectionMail] = useState(null);

  const columns = [
    {
      title: '送信者',
      ellipsis: {
        showTitle: false,
      },
      dataIndex: 'sender',
    },
    {
      title: '件名',
      dataIndex: 'title',
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: '受信時間',
      dataIndex: 'receivingTime',
      width: 140,
    },
  ];
  const data = [
    {
      key: '1',
      sender: '楽天カード通信',
      title: '＼ご褒美キャンペーン／フォロー＆リポストで5,0000ポイントが抽選で2名様に当たる！',
      receivingTime: '18:19',
      senderAddress: 'sender01@example.co.jp',
      body: '■株式会社スカイディスク\n' +
        '■【フルリモート】PdM（プロダクトマネージャー）\n' +
        '■★“製造業向けSaaS”を展開する急成長ベンチャー\n' +
        '\n' +
        '\n' +
        '内藤勇之助様\n' +
        '\n' +
        'お世話になっております。\n' +
        'エン エージェントの毛利 友香と申します。\n' +
        '\n' +
        'ご紹介させて頂きたいポジションがあり、ご連絡させていただきました。\n' +
        '\n' +
        'ご応募いただける場合は、ご返信をいただけますと幸いです。\n' +
        'ご応募される方は、履歴書・職務経歴書が必要になるため別途ご案内させていただきます。\n' +
        'もしお手元に履歴書・職務経歴書をお持ちでしたら、併せてご返信ください。\n' +
        '\n' +
        '-----------------------------------------------------------\n' +
        '■書類フォーマット\n' +
        '-----------------------------------------------------------\n' +
        'Word、またはExcel形式にてご送付下さい。\n' +
        '※履歴書・職務経歴書のフォーマットをご用意しております。\n' +
        'よろしければ、ご活用下さい。\n' +
        'https://corp.en-japan.com/syokai/sample/\n' +
        '-----------------------------------------------------------'
    },
    {
      key: '2',
      sender: 'Microsoft アカウント チーム',
      title: 'Microsoft アカウントのセキュリティ情報が追加されました',
      receivingTime: '18:19',
      senderAddress: 'sender02@example.co.jp',
      body: '\n' +
        'Microsoft アカウント\n' +
        'セキュリティ情報が追加されました\n' +
        '最近、Microsoft アカウント yu**7@gmail.com に次のセキュリティ情報が追加されました:\n' +
        '8108042084961\n' +
        'お客様がこれを実行した場合は、このメールを無視しても問題ありません。\n' +
        'お客様がこれを実行していない場合、悪意のあるユーザーがお客様のアカウントにアクセスできます。最近のアクティビティをご確認のうえ、手順に従ってアカウントを保護してください。\n' +
        '最近のアクティビティを確認する\n' +
        'セキュリティ通知を受け取る場所を変更するには、ここをクリックしてください。\n' +
        'サービスのご利用ありがとうございます。\n' +
        'Microsoft アカウント チーム'
    },
    {
      key: '3',
      sender: '三井住友銀行',
      title: '【三井住友銀行】口座引き落としの事前お知らせ',
      receivingTime: '2023年11月21日',
      senderAddress: 'sender03@example.co.jp',
      body: 'ナイトウ　ユウノスケさま\n' +
        '\n' +
        '三井住友銀行より、以下の口座引き落としについて事前にお知らせします。\n' +
        '\n' +
        '口座引落予定日： 2023年12月27日\n' +
        '\n' +
        '◆明細１\n' +
        '引落金額：　85,475円\n' +
        '内容　　：　ローンご返済\n' +
        '\n' +
        '（2023年12月26日04時27分現在（配信番号：　1226001129-0010））\n' +
        '\n' +
        '◆明細２\n' +
        '引落金額：　68,254円\n' +
        '内容　　：　ローンご返済\n' +
        '\n' +
        '（2023年12月26日04時27分現在（配信番号：　1226001129-0010））\n' +
        '\n' +
        '―――■SMBCダイレクトで残高確認■―――\n' +
        'ATMに行かなくても残高をご確認いただけます。\n' +
        'https://www.smbc.co.jp/kojin/app/smbcapp.html?aff=dirct_mlODM1902003\n' +
        '―――――――――――――――――――――\n' +
        '\n' +
        '※メールでお知らせすることが出来ない場合や、お知らせした明細と実際の手続が異なる場合があります。詳細は当行ホームページをご確認ください。\n' +
        '※本メールは、お客さまお届けのメールアドレスへお送りしています（本メールの再送依頼は受け付けておりません）。\n' +
        '\n' +
        '【不正送金被害にご注意ください】\n' +
        '偽のメール等で誘導された当行を装う偽サイトに、お客さまの口座情報やワンタイムパスワード等を入力すると、不正送金被害にあう危険があります。\n' +
        '＞ https://www.smbc.co.jp/kojin/special/stop_phishing_crime/\n' +
        '\n' +
        '【当行から送信したメールであることの確認方法】\n' +
        '「三井住友銀行」名でお送りするメールには、携帯キャリアのメールアドレス宛を除き全て電子署名を付けています。\n' +
        '＞ https://www.smbc.co.jp/security/smime/\n' +
        '\n' +
        '【当行のサイトであることの確認方法】\n' +
        '閲覧しているサイトが当行の正当なサイトかどうかを、電子証明書により確認いただけます。\n' +
        '＞ https://qa.smbc.co.jp/faq/show/297?site_domain=default\n' +
        '\n' +
        '【メールの内容に身に覚えがない場合】\n' +
        '本メールに対するメールでのご返信・お問い合わせはお受けしておりません。メールの内容に身に覚えがない場合や、サービス等についてくわしく知りたい場合は、当行ホームページをご覧いただくか、以下より電話番号を確認の上、お問い合わせください。\n' +
        '＞ https://www.smbc.co.jp/contact_list.html\n' +
        '\n' +
        '【メールアドレスや配信設定の変更】\n' +
        'SMBCダイレクトにてお手続ください。\n' +
        '＞ https://direct.smbc.co.jp/aib/aibgsjsw5001.jsp?sc=081\n' +
        '\n' +
        '-----------------------------------------------------------------------\n' +
        '発行：株式会社 三井住友銀行\n' +
        '東京都千代田区丸の内一丁目1番2号\n' +
        '登録金融機関　関東財務局長(登金)第54号\n' +
        '加入協会　日本証券業協会\n' +
        '　　　　　一般社団法人金融先物取引業協会\n' +
        '　　　　　一般社団法人第二種金融商品取引業協会\n' +
        '本メールの内容を無断で引用、転載することを禁じます。'
    },
  ];

  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background: 'white',
        borderRadius: 5,
      }}
    >
      <Row>
        <Col span={selectionMail == null ? 24 : 12}>
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {setSelectionMail(record)}, // click row
              };
            }}
            columns={columns}
            dataSource={data}
            title={() => 'Header'}
          />
        </Col>
        {selectionMail != null &&
          <Col span={12}>
            <Content
              style={{
                overflow: 'scroll',
                marginTop: 50,
                marginLeft: 20,
                marginRight: 0,
                height: '75vh'
              }}
            >
              <div style={{ fontSize: 24 }}>{ selectionMail.title }</div>
              <Flex align={'center'} style={{ marginTop: 10 }}>
                <div style={{ marginRight: 10, fontWeight: 'bold' }}>{ selectionMail.sender }</div>
                <div>&lt;{ selectionMail.senderAddress }&gt;</div>
              </Flex>
              <p style={{ whiteSpace: 'pre-wrap' }}>{ selectionMail.body }</p>
            </Content>
          </Col>
        }

      </Row>
    </Content>
  )
}
