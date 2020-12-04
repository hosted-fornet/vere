/-  *post
|_  i=indexed-post
++  grow
  |%
  ++  noun  i
  ++  notification-kind
    ?+  index.p.i  ~
      [@ ~]       `[%link 0 %each]
      [@ @ %1 ~]  `[%comment 1 %count]
      [@ @ @ ~]   `[%edit-comment 1 %count]
    ==
  --
++  grab
  |%
  ++  noun
    |=  p=*
    =/  ip  ;;(indexed-post p)
    ?+    index.p.ip  ~|(index+index.p.ip !!)
        ::  top-level link post; title and url
        ::
        [@ ~]
      ?>  ?=([[%text @] [%url @] ~] contents.p.ip)
      ip
    ::
        ::  comment on link post; container structure
        ::
        [@ @ ~]
      ?>  ?=(~ contents.p.ip)
      ip
    ::
        ::  comment on link post; comment text
        ::
        [@ @ @ ~]
      ?>  ?=(^ contents.p.ip)
      ip
    ==
  --
++  grad  %noun
--
