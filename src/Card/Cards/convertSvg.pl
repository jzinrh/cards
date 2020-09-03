#!/usr/bin/perl
use strict;
use warnings;

no warnings 'uninitialized';

use Data::Dumper;

my $directory = './images';
my @files = `ls $directory`;
chomp $_ for (@files);
my %rankMap = (
  '1' => 'Ace',
  '2' => 'Two',
  '3' => 'Three',
  '4' => 'Four',
  '5' => 'Five',
  '6' => 'Six',
  '7' => 'Seven',
  '8' => 'Eight',
  '9' => 'Nine',
  '10' => 'Ten',
  'j' => 'Jack',
  'q' => 'Queen',
  'k' => 'King',
);

my %suits = (
  h => 'Hearts',
  s => 'Spades',
  c => 'Clubs',
  d => 'Diamonds',
);

my %cards;
foreach my $filename (@files) {
  my ($rank, $suit);
  if ($filename =~ m/([0-9jqk]*)([dchs]).svg/) {
    $rank = $rankMap{$1};
    $suit = $suits{$2};
  }

  my @o = `cat $directory/$filename`;
  chomp $_ for @o;

  @o = grep {
    $_ !~ m/<\!/
    && $_ !~ m/<\?xml/
    && $_ !~ m/style/
    && $_ !~ m/display:/
    && $_ !~ m/xmlns:svg/
  } @o;

  foreach my $o (@o) {
    $o =~ s/(\s*class=\".*\"\s*)//g;
    $o =~ s/:([a-z])/uc $1/ge;
  }

  my $contents = join("\n", @o);
  print "./Cards/${suit}/$rank.tsx";
  open(my $fh, '>', "./${suit}/$rank.tsx");
  print $fh "
    import React from 'react';

    export default function ${rank}Of${suit}({ width }: { width: number }) {
      return (
        $contents
      );
    }
  ";
  close $fh;
}

